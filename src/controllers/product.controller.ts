import { Request, Response } from 'express'
import { Product } from '../generated/prisma/client'
import productModel from '../models/product.model'

// Get all products
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productModel.fetchAll()
        res.status(200).json(products)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error" })
    }
}

// Get product by id
const getProductById = async (req: Request<{ id: string }>, res: Response) => {
    const id = Number(req.params.id)
    try {
        const product = await productModel.fetchById(id)
        if (!product) {
            res.status(404).json({ message: "Product not found" })
            return
        }
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error" })
    }
}

// Add product
const addProduct = async (req: Request<{}, Omit<Product, 'id'>>, res: Response) => {
    const { productName, price } = req.body
    try {
        const product = await productModel.create({
            productName,
            price
        })
        res.status(201).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error" })
    }
}

// Update product by id
const updateProductById = async (req: Request<{ id: string }, Partial<Product>>, res: Response) => {
    const id = Number(req.params.id)
    const { productName, price } = req.body
    try {
        const updatedProduct = await productModel.editById(id, {
            productName,
            price
        })
        if (!updatedProduct) {
            res.status(404).json({ message: "User not found" })
            return
        }
        res.status(200).json(updatedProduct)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error" })
    }
}

// Delete product by id
const deleteProductById = async (req: Request<{ id: string }>, res: Response) => {
    const id = Number(req.params.id)
    try {
        const deletedProduct = await productModel.deleteById(id)
        res.status(200).json(deletedProduct)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error" })
    }
}

export default {
    getAllProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById
}