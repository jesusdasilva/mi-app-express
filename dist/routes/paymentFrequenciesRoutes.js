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
const paymentFrequenciesController_1 = require("../controllers/paymentFrequenciesController");
const router = express_1.default.Router();
router.post('/payment_frequencies', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const frequency = yield (0, paymentFrequenciesController_1.createPaymentFrequency)(req.body);
        res.json(frequency);
    }
    catch (err) {
        next(err);
    }
}));
router.get('/payment_frequencies', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const frequencies = yield (0, paymentFrequenciesController_1.getAllPaymentFrequencies)();
        const frequenciesWithNumbers = frequencies.map(frequency => {
            return Object.assign(Object.assign({}, frequency), { id: Number(frequency.id) });
        });
        res.json(frequenciesWithNumbers);
    }
    catch (err) {
        next(err);
    }
}));
router.get('/payment_frequencies/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const frequency = yield (0, paymentFrequenciesController_1.getPaymentFrequency)(Number(req.params.id));
        if (frequency) {
            const frequencyWithNumbers = Object.assign(Object.assign({}, frequency), { id: Number(frequency.id) });
            res.json(frequencyWithNumbers);
        }
        else {
            res.status(404).json({ message: 'Frequency not found' });
        }
    }
    catch (err) {
        next(err);
    }
}));
router.put('/payment_frequencies/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const frequency = yield (0, paymentFrequenciesController_1.updatePaymentFrequency)(Number(req.params.id), req.body);
        res.json(frequency);
    }
    catch (err) {
        next(err);
    }
}));
router.delete('/payment_frequencies/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const frequency = yield (0, paymentFrequenciesController_1.deletePaymentFrequency)(Number(req.params.id));
        res.json(frequency);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
