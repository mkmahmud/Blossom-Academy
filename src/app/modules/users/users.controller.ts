import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { usersService } from './users.service'
import httpStatus from 'http-status'

// Create Student
const createUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await usersService.createUser(body)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created Successfully',
    data: result,
  })
})

// Get User
const getUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await usersService.getUser(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Data Retrived Successfully',
    data: result,
  })
})

// Get Teachers
const getTeachers = catchAsync(async (req: Request, res: Response) => {
  const result = await usersService.getTeachers()

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Teachers Data Retrived Successfully',
    data: result,
  })
})

// Get Students
const getStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await usersService.getStudents()

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students Data Retrived Successfully',
    data: result,
  })
})

// Update User Details
const updateUserDetails = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const body = req.body
  const result = await usersService.updateUserDetails(id, body)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Updated Successfully',
    data: result,
  })
})

// getAllUsers Details By Role
const getAllUsersDetailsByRole = catchAsync(
  async (req: Request, res: Response) => {
    const { role } = req.params

    const result = await usersService.getAllUsersDetailsByRole(role)

    // Send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `${role} Data Retrived Successfully`,
      data: result,
    })
  },
)

// getSingleUser Details
const getSingleUserDetails = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await usersService.getSingleUserDetails(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Data Retrived Successfully',
    data: result,
  })
})

export const usersController = {
  createUser,
  getUser,
  getTeachers,
  getStudents,
  updateUserDetails,
  getAllUsersDetailsByRole,
  getSingleUserDetails,
}
