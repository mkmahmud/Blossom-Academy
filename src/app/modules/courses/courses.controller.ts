import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { CoursesService } from './courses.service'

// Create Course
const createCourse = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await CoursesService.createCourse(body)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses created Successfully',
    data: result,
  })
})

// Get All Course
const getAllCourses = catchAsync(async (req: Request, res: Response) => {
  const result = await CoursesService.getAllCourses()

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses created Successfully',
    data: result,
  })
})

// Delete Course
const deleteCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await CoursesService.deleteCourse(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses created Successfully',
    data: result,
  })
})

export const coursesController = {
  createCourse,
  getAllCourses,
  deleteCourse,
}
