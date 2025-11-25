// Set up your server
import express, { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import productRouter from './routes/product.routes'

// Create server
const app = express()

// Middleware
app.use(express.json())

// Routes
app.use('/products', productRouter)
app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Welcome to my server!")
})

// Fallback / 404
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send("Invalid route!")
})

// Start server
const PORT = process.env.PORT
if (!PORT) {
    throw new Error("Missing port!")
}
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})