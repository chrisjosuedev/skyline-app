import { Router } from 'express'
import { getLatestSales, getTotalSales } from "../controllers/sales.controller.js"

const router = Router()

// GET
router.get('/recents', getLatestSales)
router.get('/totals', getTotalSales)

export default router