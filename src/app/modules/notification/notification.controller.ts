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

// Create Multiple Notification
const createMultipleNotification = catchAsync(
  async (req: Request, res: Response) => {
    const body = req.body
    const result = body.id.map(async (i: any) => {
      const finalData = {
        status: body.status,
        content: body.content,
        link: body.link,
        receiver: i,
      }

      await NotificationService.createNotification(finalData)
    })

    // Send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Notification Sent Successfully',
      data: body,
    })
  },
)

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

// Update Notification
const updateNotifications = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await NotificationService.updateNotifications(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Notification Updated Successfully',
    data: result,
  })
})

// Export functions
export const NotificationController = {
  createNotification,
  getNotifications,
  updateNotifications,
  createMultipleNotification,
}
