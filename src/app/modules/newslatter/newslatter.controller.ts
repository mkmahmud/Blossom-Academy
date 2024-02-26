import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { NewsLatterService } from './newslatter.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

// Create Course
const insertNewslatterEmail = catchAsync(
  async (req: Request, res: Response) => {
    const body = req.body
    const result = await NewsLatterService.insertNewslatterEmail(body)

    // Send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Email Sent Successfully',
      data: result,
    })
  },
)

// Export functions
export const NewsLatterController = {
  insertNewslatterEmail,
}
