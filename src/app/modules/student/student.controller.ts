import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { StudentsService } from './student.service'

// Update Teacher
const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const body = req.body
  const result = await StudentsService.updateStudent(id, body)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'teacher Updated Successfully',
    data: result,
  })
})

export const StudentController = {
  updateStudent,
}
