import express from 'express'
import { PaymentController } from './payment.controller'
const router = express.Router()

// Init PAyment
router.post('/init', PaymentController.initPayment)

export const PaymentsRoutes = router
