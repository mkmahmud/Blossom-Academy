import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { BatchService } from './batch.service'

// Create Course
const createBatch = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await BatchService.createBatch(body)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Batch created Successfully',
    data: result,
  })
})

export const batchController = {
  createBatch,
}
