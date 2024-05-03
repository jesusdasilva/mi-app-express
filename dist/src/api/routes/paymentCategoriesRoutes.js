"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentCategoriesController_1 = require("../controllers/paymentCategoriesController");
const router = express_1.default.Router();
router.post('/payment_categories', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield (0, paymentCategoriesController_1.createPaymentCategory)(req.body);
    res.json(category);
}));
router.get('/payment_categories', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield (0, paymentCategoriesController_1.getAllPaymentCategories)();
        const categoriesWithNumbers = categories.map(category => {
            return Object.assign(Object.assign({}, category), { id: Number(category.id) });
        });
        res.json(categoriesWithNumbers);
    }
    catch (err) {
        next(err);
    }
}));
router.get('/payment_categories/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield (0, paymentCategoriesController_1.getPaymentCategory)(Number(req.params.id));
    if (category) {
        const categoryWithNumbers = Object.assign(Object.assign({}, category), { id: Number(category.id) });
        res.json(categoryWithNumbers);
    }
    else {
        res.status(404).json({ message: 'Category not found' });
    }
}));
router.put('/payment_categories/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield (0, paymentCategoriesController_1.updatePaymentCategory)(Number(req.params.id), req.body);
    res.json(category);
}));
router.delete('/payment_categories/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield (0, paymentCategoriesController_1.deletePaymentCategory)(Number(req.params.id));
    res.json(category);
}));
exports.default = router;
