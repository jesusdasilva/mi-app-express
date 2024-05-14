"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryUpdateSchema = exports.categoryCreateSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.categoryCreateSchema = joi_1.default.object({
    data: joi_1.default.object({
        name: joi_1.default.string().max(255).required(),
        color: joi_1.default.string().max(255).required(),
        description: joi_1.default.string().max(255).optional(),
        created_at: joi_1.default.date().optional(),
        updated_at: joi_1.default.date().optional(),
    }).required()
});
exports.categoryUpdateSchema = joi_1.default.object({
    where: joi_1.default.object({
        id: joi_1.default.number().required(),
    }).required(),
    data: joi_1.default.object({
        name: joi_1.default.string().max(255).optional(),
        color: joi_1.default.string().max(255).optional(),
        description: joi_1.default.string().max(255).optional(),
        created_at: joi_1.default.date().optional(),
        updated_at: joi_1.default.date().optional(),
    }).required()
});
