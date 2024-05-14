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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePaymentCategory = exports.updatePaymentCategory = exports.getPaymentCategory = exports.getAllPaymentCategories = exports.createPaymentCategory = void 0;
const client_1 = require("@prisma/client");
const validationSchemas_1 = require("../validationSchemas");
const prisma = new client_1.PrismaClient();
const createPaymentCategory = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = validationSchemas_1.categoryCreateSchema.validate(categoryData);
    if (error) {
        throw new Error(`Invalid data: ${error.details[0].message}`);
    }
    return yield prisma.payment_categories.create(categoryData);
});
exports.createPaymentCategory = createPaymentCategory;
const getAllPaymentCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.payment_categories.findMany();
});
exports.getAllPaymentCategories = getAllPaymentCategories;
const getPaymentCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.payment_categories.findUnique({
        where: { id }
    });
});
exports.getPaymentCategory = getPaymentCategory;
const updatePaymentCategory = (id, categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = validationSchemas_1.categoryUpdateSchema.validate(categoryData);
    if (error) {
        throw new Error(`Invalid data: ${error.details[0].message}`);
    }
    return yield prisma.payment_categories.update({
        where: { id },
        data: categoryData
    });
});
exports.updatePaymentCategory = updatePaymentCategory;
const deletePaymentCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.payment_categories.delete({
        where: { id }
    });
});
exports.deletePaymentCategory = deletePaymentCategory;
