import express from 'express'
import cors from 'cors'

import path from 'path'
import { fileURLToPath } from 'url'

import { CONTEXT_API } from './config.js'
import customerRoutes from '../routes/customers.routes.js'
import saleRoutes from '../routes/sales.routes.js'

const app = express()

// Public
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.join(__filename, '../../../', '../client/dist')

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname))

// Routes
app.use(`${CONTEXT_API}/customers`, customerRoutes)
app.use(`${CONTEXT_API}/sales`, saleRoutes)

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

export default app
