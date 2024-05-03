"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentCategoriesRoutes_1 = __importDefault(require("./src/api/routes/paymentCategoriesRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.disable('x-powered-by');
app.use(express_1.default.json());
app.use(paymentCategoriesRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("API REST Ver 1.0");
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
