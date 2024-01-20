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

// Get Course
const getBatch = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await BatchService.getBatch(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Batch Data Retrived Successfully',
    data: result,
  })
})

// Add Student inTo batch
const addStudentIntoBatch = catchAsync(async (req: Request, res: Response) => {
  const studentId = req.query.studentId as string
  const batchId = req.query.batchId as string

  const result = await BatchService.addStudentIntoBatch(studentId, batchId)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Added Successfully',
    data: result,
  })
})

// Add teacher inTo batch
const addTeacherIntoBatch = catchAsync(async (req: Request, res: Response) => {
  const teacherId = req.query.teacherId as string
  const batchId = req.query.batchId as string

  const result = await BatchService.addTeacherIntoBatch(teacherId, batchId)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Teacher Added Successfully',
    data: result,
  })
})

// Add Course inTo batch
const addCourseIntoBatch = catchAsync(async (req: Request, res: Response) => {
  const courseId = req.query.courseId as string
  const batchId = req.query.batchId as string

  const result = await BatchService.addCourseIntoBatch(courseId, batchId)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course Added Successfully',
    data: result,
  })
})

// Get  batch
const getAllBatch = catchAsync(async (req: Request, res: Response) => {
  const result = await BatchService.getAllBatch()

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Batch data Retrieved Successfully',
    data: result,
  })
})

// Get  batch
const getAllActiveBatch = catchAsync(async (req: Request, res: Response) => {
  const result = await BatchService.getAllActiveBatch()

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Batch data Retrieved Successfully',
    data: result,
  })
})

export const batchController = {
  createBatch,
  getBatch,
  addStudentIntoBatch,
  addTeacherIntoBatch,
  addCourseIntoBatch,
  getAllBatch,
  getAllActiveBatch,
}
