import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.use('/api/products', productRoutes)
const PORT = process.env.PORT || 4000

app.listen(PORT), console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.bold)

