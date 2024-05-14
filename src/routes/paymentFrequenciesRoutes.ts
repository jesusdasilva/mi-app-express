import express from 'express';
import {
  createPaymentFrequency,
  getAllPaymentFrequencies,
  getPaymentFrequency,
  updatePaymentFrequency,
  deletePaymentFrequency
} from '../controllers/paymentFrequenciesController';

const router = express.Router();

router.post('/payment_frequencies', async (req, res, next) => {
  try {
    const frequency = await createPaymentFrequency(req.body);
    res.json(frequency);
  } catch (err) {
    next(err);
  }
});

router.get('/payment_frequencies', async (req, res, next) => {
  try {
    const frequencies = await getAllPaymentFrequencies();
    const frequenciesWithNumbers = frequencies.map(frequency => {
      return {
        ...frequency,
        id: Number(frequency.id)
      };
    });
    res.json(frequenciesWithNumbers);
  } catch (err) {
    next(err);
  }
});

router.get('/payment_frequencies/:id', async (req, res, next) => {
  try {
    const frequency = await getPaymentFrequency(Number(req.params.id));
    if (frequency) {
      const frequencyWithNumbers = {
        ...frequency,
        id: Number(frequency.id)
      };
      res.json(frequencyWithNumbers);
    } else {
      res.status(404).json({ message: 'Frequency not found' });
    }
  } catch (err) {
    next(err);
  }
});

router.put('/payment_frequencies/:id', async (req, res, next) => {
  try {
    const frequency = await updatePaymentFrequency(Number(req.params.id), req.body);
    res.json(frequency);
  } catch (err) {
    next(err);
  }
});

router.delete('/payment_frequencies/:id', async (req, res, next) => {
  try {
    const frequency = await deletePaymentFrequency(Number(req.params.id));
    res.json(frequency);
  } catch (err) {
    next(err);
  }
});

export default router;