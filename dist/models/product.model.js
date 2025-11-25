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
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient();
// Fetch all products
const fetchAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.findMany();
});
// Fetch product by id
const fetchById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.findUnique({
        where: { id }
    });
});
// Create product
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.create({ data });
});
// Edit product by id
const editById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.update({
        where: { id },
        data
    });
});
// Delete product by id
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.delete({
        where: { id }
    });
});
exports.default = {
    fetchAll,
    fetchById,
    create,
    editById,
    deleteById
};
