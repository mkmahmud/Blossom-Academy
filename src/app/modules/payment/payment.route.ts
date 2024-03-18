import express from 'express'
import { PaymentController } from './payment.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'
const router = express.Router()

// Init PAyment
router.post('/init', PaymentController.initPayment)

// Validate And Update Payment Status
router.post('/validate-and-update', PaymentController.validateAndUpdate)

// Validate Payment webHook
router.post('/webhook', PaymentController.webHook)

// Get Orders Details
router.get(
  '/get-all-orders',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  PaymentController.getAllOrders,
)

export const PaymentsRoutes = router
