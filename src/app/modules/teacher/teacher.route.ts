import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'
import { TeachersService } from './teacher.service'
import { TeacherController } from './teacher.controller'

const router = express.Router()

// Create Teacher
router.post(
  '/create',
  auth(
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  TeachersService.createTeacher,
)

// Update Teacher
router.patch(
  '/updateTeacher/:id',
  auth(ENUM_USER_ROLE.TEACHER),
  TeacherController.updateTeacher,
)

// getAllTeacher Teacher
router.get('/getAllTeacher', TeacherController.getAllTeacher)

// getAllTeacher Teacher
router.get('/getSingleTeacher/:id', TeacherController.getSingleTeacher)

export const TeachersRoutes = router
