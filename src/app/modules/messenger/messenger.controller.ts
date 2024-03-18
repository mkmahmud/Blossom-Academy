import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { MessengerService } from './messenger.service'

// Engaged Users
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

// Get All Messages
const getAllMessages = catchAsync(async (req: Request, res: Response) => {
  const { sender, reciver } = req.query

  // @ts-ignore
  const result = await MessengerService.getAllMessages(sender, reciver)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Messages Retrived Successfully',
    data: result,
  })
})

// Insert Message

const insertMessage = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await MessengerService.InsertMessage(data)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Messages Retrived Successfully',
    data: result,
  })
})

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
  getAllMessages,
  getMyContact,
  insertMessage,
}
