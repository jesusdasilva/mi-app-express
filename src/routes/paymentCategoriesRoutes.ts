import express from "express";
import {
  createPaymentCategory,
  getAllPaymentCategories,
  getPaymentCategory,
  updatePaymentCategory,
  deletePaymentCategory,
} from "../controllers/paymentCategoriesController";

const router = express.Router();

router.post("/payment_categories", async (req, res, next) => {
  try {
    const category = await createPaymentCategory(req.body);
    res.json(category);
  } catch (err) {
    next(err);
  }
});

router.get("/payment_categories", async (req, res, next) => {
  try {
    const categories = await getAllPaymentCategories();
    const categoriesWithNumbers = categories.map((category) => {
      return {
        ...category,
        id: Number(category.id),
      };
    });
    res.json(categoriesWithNumbers);
  } catch (err) {
    next(err);
  }
});

router.get("/payment_categories/:id", async (req, res, next) => {
  try {
    const category = await getPaymentCategory(Number(req.params.id));
    if (category) {
      const categoryWithNumbers = {
        ...category,
        id: Number(category.id),
      };
      res.json(categoryWithNumbers);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (err) {
    next(err);
  }
});

router.put("/payment_categories/:id", async (req, res, next) => {
  try {
    const category = await updatePaymentCategory(
      Number(req.params.id),
      req.body
    );
    res.json(category);
  } catch (err) {
    next(err);
  }
});

router.delete("/payment_categories/:id", async (req, res, next) => {
  try {
    const category = await deletePaymentCategory(Number(req.params.id));
    res.json(category);
  } catch (err) {
    next(err);
  }
});

export default router;