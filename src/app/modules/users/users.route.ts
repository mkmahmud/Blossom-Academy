import express from 'express'
import { usersController } from './users.controller'
import validateRequest from '../../middlewares/validateRequest'
import { usersValidation } from './users.validation'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'

const router = express.Router()

// Create User
router.post(
  '/create',
  validateRequest(usersValidation.usersZodSchema),
  usersController.createUser,
)

// Get Teachers
router.get(
  '/teachers',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGEMENT,
  ),
  usersController.getTeachers,
)

// Get Students
router.get(
  '/students',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGEMENT,
  ),
  usersController.getStudents,
)

// Update Users Details
router.patch(
  '/updateuser/:id',
  auth(
    ENUM_USER_ROLE.TEACHER,
    ENUM_USER_ROLE.STUDENT,
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  usersController.updateUserDetails,
)

// getAllUsers Details By Role
router.get('/getAllUsers/:role', usersController.getAllUsersDetailsByRole)

// Get All Users
router.get('allUsers/:id', usersController.getUser)

// Get User
router.get('/:id', usersController.getUser)

// getSingleUser Details
router.get('/getSingleUserDetails/:id', usersController.getSingleUserDetails)

// getSingleUser Details By Id
router.get(
  '/getSingleUserDetailsById/:id',
  usersController.getSingleUserDetailsbyId,
)

export const UserRoutes = router
