import express from 'express'
import { PaymentController } from './payment.controller'
const router = express.Router()

// Init PAyment
router.post('/init', PaymentController.initPayment)

// Validate Payment webHook
router.post('/webhook', PaymentController.webHook)

export const PaymentsRoutes = router
