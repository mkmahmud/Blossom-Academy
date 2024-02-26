import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { NotificationService } from './notification.service'

// Create Notification
const createNotification = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await NotificationService.createNotification(body)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Notification created Successfully',
    data: result,
  })
})
// Get Notification
const getNotifications = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await NotificationService.getNotifications(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Notification Data Retrived Successfully',
    data: result,
  })
})

// Export functions
export const NotificationController = {
  createNotification,
  getNotifications,
}
