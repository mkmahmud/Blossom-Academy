import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { TeachersService } from './teacher.service'

// Create Teacher
const createTeacher = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await TeachersService.createTeacher(body)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'teacher created Successfully',
    data: result,
  })
})

// Update Teacher
const updateTeacher = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const body = req.body
  const result = await TeachersService.updateTeacher(id, body)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'teacher Updated Successfully',
    data: result,
  })
})

// getAllTeacher Teacher
const getAllTeacher = catchAsync(async (req: Request, res: Response) => {
  const result = await TeachersService.getAllTeacher()

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'teachers Data Retrived Successfully',
    data: result,
  })
})

// getSingleTeacher Teacher
const getSingleTeacher = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TeachersService.getSingleTeacher(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'teacher Data Retrived Successfully',
    data: result,
  })
})

export const TeacherController = {
  createTeacher,
  updateTeacher,
  getAllTeacher,
  getSingleTeacher,
}
