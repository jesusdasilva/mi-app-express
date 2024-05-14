"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const paymentCategoriesRoutes_1 = __importDefault(require("./routes/paymentCategoriesRoutes"));
const paymentFrequenciesRoutes_1 = __importDefault(require("./routes/paymentFrequenciesRoutes"));
const logger_1 = __importDefault(require("./logger"));
const deepmerge_1 = __importDefault(require("deepmerge"));
// swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const paymentCategoriesSwaggerDocument = __importStar(require("./swagger/paymentCategoriesSwagger.json"));
const paymentFrequenciesSwaggerDocument = __importStar(require("./swagger/paymentFrequenciesSwagger.json"));
const combinedSwaggerDocument = (0, deepmerge_1.default)(paymentCategoriesSwaggerDocument, paymentFrequenciesSwaggerDocument);
dotenv_1.default.config();
const app = (0, express_1.default)();
app.disable('x-powered-by');
app.use(express_1.default.json());
app.use(paymentCategoriesRoutes_1.default);
app.use(paymentFrequenciesRoutes_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(combinedSwaggerDocument));
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('API REST Ver 1.0');
});
//handle errors
app.use((err, req, res, next) => {
    if (!err) {
        return next();
    }
    logger_1.default.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
