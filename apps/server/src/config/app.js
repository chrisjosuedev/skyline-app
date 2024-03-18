import express from 'express'
import cors from 'cors'

import { CONTEXT_API } from './config.js'
import customerRoutes from '../routes/customers.routes.js'
import saleRoutes from '../routes/sales.routes.js'

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use(`${CONTEXT_API}/customers`, customerRoutes)
app.use(`${CONTEXT_API}/sales`, saleRoutes)

// Not Found
app.use((req, res, next) => {
  res.status(404).json({
    httpCode: 404,
    message: 'Not found.'
  })
})

export default app