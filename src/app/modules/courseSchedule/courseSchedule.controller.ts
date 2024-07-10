import catchAsync from '../../../shared/catchAsync'
import { Request, Response } from 'express'
import { courseScheduleService } from './courseSchedule.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

// Create Course schedule
const CourseSchedule = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await courseScheduleService.createCourseSchedule(body)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses schedule created Successfully',
    data: result,
  })
})

// Get Course schedule
const getCourseSchedule = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await courseScheduleService.getCourseSchedule(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses schedule retived Successfully',
    data: result,
  })
})

export const courseScheduleController = {
  CourseSchedule,
  getCourseSchedule,
}
