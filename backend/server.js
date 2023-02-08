import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()


app.get('/', (req, res) => {
 res.send('API is running...')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 9000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold.underline)
)
