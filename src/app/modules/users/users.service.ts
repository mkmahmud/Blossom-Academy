import mongoose from 'mongoose'
import { ENUM_USER_ROLE } from '../../../enums/userRole'
import {
  generateAdminId,
  generateManagementId,
  generateStudentId,
  generateTeacherId,
} from '../../../helpers/genarateUserId'
import { Teachers } from '../teacher/teacher.model'
import { IUserDetails, IUsers } from './users.interface'
import { UserDetails, Users } from './users.model'
import bcrypt from 'bcrypt'
import { Students } from '../student/student.model'
import nodemailer from 'nodemailer'

// Create User
const createUser = async (data: IUsers): Promise<IUsers | null | object> => {
  try {
    // check if user already exists
    const isExist = await Users.findOne({ email: data.email })
    if (isExist) {
      return { message: 'user already exists' }
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)
    // Update password
    data.password = hashedPassword

    //set Role
    if (data.role) {
      data.role = data.role
    } else {
      data.role = ENUM_USER_ROLE.STUDENT
    }

    // Set User ID
    if (data.role === ENUM_USER_ROLE.STUDENT) {
      data.userId = await generateStudentId()
    } else if (data.role === ENUM_USER_ROLE.ADMIN) {
      data.userId = await generateAdminId()
    } else if (data.role === ENUM_USER_ROLE.MANAGEMENT) {
      data.userId = await generateManagementId()
    } else if (data.role === ENUM_USER_ROLE.TEACHER) {
      data.userId = await generateTeacherId()
    }

    // Create User
    const session = await mongoose.startSession()
    session.startTransaction()

    try {
      // Create User
      const user = await Users.create([data], { session })

      if (user) {
        const inputString = user[0].fullName
        const fullNameString = inputString.split(' ')

        // Extract the first Name
        const firstName = fullNameString[0]

        // Extract the Last
        const lastName = fullNameString.slice(1).join(' ')

        const detailsData = {
          id: user[0]._id,
          userId: user[0].userId,
          email: user[0].email,
          role: user[0].role,
          firstName: firstName,
          lastName: lastName,
        }

        await UserDetails.create([detailsData], { session })

        await session.commitTransaction()
        session.endSession()

        // Configure User data
        const userInfoEmail = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: 'nurul.dev.mern@gmail.com',
            pass: 'rnqh snjf wvyy qlfz',
          },
        })

        const mailOptions = {
          from: 'nurul.dev.mern@gmail.com',
          to: user[0]?.email,
          subject: 'Blossom Account Information',
          text: `Hello ${user[0]?.fullName} . Your User Id is ${user[0]?.userId}`,
        }

        userInfoEmail.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error)
          } else {
            console.log('email sent sucssfully')
          }
        })

        return { message: 'Success' }
      } else {
        return { message: 'Failed' }
      }
    } catch (error) {
      // An error occurred, rollback the transaction
      await session.abortTransaction()
      session.endSession()
      console.error('Transaction aborted. Error:')
      return { message: 'Failed' }
    }
  } catch (error) {
    // Handle the error, e.g., log it or throw a custom error
    console.error('Error creating user:', error)
    throw new Error('Error creating user')
  }
}

// Get User
const getUser = async (id: string): Promise<IUsers | null | object> => {
  try {
    const result = await Users.findById(id).select('-password')
    return result
  } catch (err) {
    console.log(err)
    return null
  }
}

// Get Teachers Users
const getTeachers = async (): Promise<IUsers | null | object> => {
  try {
    const result = await Users.find({ role: 'teacher' }).select('-password')
    return result
  } catch (err) {
    console.log(err)
    return null
  }
}

// Get Students Users
const getStudents = async (): Promise<IUsers | null | object> => {
  try {
    const result = await Users.find({ role: 'student' }).select('-password')
    return result
  } catch (err) {
    console.log(err)
    return null
  }
}

// Update User Details
const updateUserDetails = async (
  userId: string,
  data: Partial<IUserDetails>,
): Promise<Partial<IUserDetails> | null> => {
  const updatedTeacher = await UserDetails.findOneAndUpdate(
    { userId: userId },
    { $set: data },
    { new: true, useFindAndModify: false },
  )

  return updatedTeacher
}

// Get All Users Details by role
const getAllUsersDetailsByRole = async (role: any) => {
  const res = await UserDetails.find({ role: role })
  return res
}

// Get Single User Details
const getSingleUserDetails = async (id: any) => {
  const res = await UserDetails.findOne({ id: id })
  return res
}

// Get Single User Details By Id
const getSingleUserDetailsById = async (id: any) => {
  const res = await UserDetails.findOne({ userId: id })
  return res
}

export const usersService = {
  createUser,
  getUser,
  getTeachers,
  getStudents,
  updateUserDetails,
  getAllUsersDetailsByRole,
  getSingleUserDetails,
  getSingleUserDetailsById,
}
