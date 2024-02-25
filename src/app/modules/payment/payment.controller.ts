import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { PaymentService } from './payment.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

// Init Payment
const initPayment = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await PaymentService.initPayment(data)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment init Successfully',
    data: result,
  })
})

// Validate payment webhook
const webHook = catchAsync(async (req: Request, res: Response) => {
  const payload = req.query
  const result = await PaymentService.webHook(payload)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment Validated Successfully',
    data: result,
  })
})

export const PaymentController = {
  initPayment,
  webHook,
}
