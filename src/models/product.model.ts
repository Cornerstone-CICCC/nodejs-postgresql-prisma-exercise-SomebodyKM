import { PrismaClient, Product } from "../generated/prisma/client";

const prisma = new PrismaClient()

// Fetch all products
const fetchAll = async () => {
    return await prisma.product.findMany()
}

// Fetch product by id
const fetchById = async (id: number) => {
    return await prisma.product.findUnique({
        where: { id }
    })
}

// Create product
const create = async (data: Omit<Product, 'id'>) => {
    return await prisma.product.create({ data })
}

// Edit product by id
const editById = async (id: number, data: Partial<Product>) => {
    return await prisma.product.update({
        where: { id },
        data
    })
}

// Delete product by id
const deleteById = async (id: number) => {
    return await prisma.product.delete({
        where: { id }
    })
}

export default {
    fetchAll,
    fetchById,
    create,
    editById,
    deleteById
}