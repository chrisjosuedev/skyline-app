import { Router } from 'express'
import { getClients, getSalesByClient } from '../controllers/customers.controller.js'

const router = Router()

// GET
router.get('/', getClients)
router.get('/sales', getSalesByClient)

export default router
