import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { MessengerService } from './messenger.service'

// Create Course
const GetMessages = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await MessengerService.getAllEngagedUsers(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Retrived Successfully',
    data: result,
  })
})

// Add New User Into my contact
const addNewUserIntoContact = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body
    const result = await MessengerService.addNewUserIntoMyContact(data)

    // Send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Added Successfully',
      data: result,
    })
  },
)

// Get my contact
const getMyContact = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await MessengerService.getMyContact(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My Contact Data Retrived Successfully',
    data: result,
  })
})

// Export functions
export const MessengerController = {
  GetMessages,
  addNewUserIntoContact,
  getMyContact,
}
