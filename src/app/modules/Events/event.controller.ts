import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { eventsServices } from './event.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

// Create Event
const createEvent = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await eventsServices.createEvent(body)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event created Successfully',
    data: result,
  })
})

// Get Events Short
const getShortEvents = catchAsync(async (req: Request, res: Response) => {
  const result = await eventsServices.getShortEvents()

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event data Retrived Successfully',
    data: result,
  })
})

// Export Function
export const eventsController = { createEvent, getShortEvents }
