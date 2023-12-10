import express from 'express'
import { coursesController } from './courses.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'

const router = express.Router()

// Create Couorses
router.post(
  '/create',
  auth(
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  coursesController.createCourse,
)

// Get All Courses
router.get('/', coursesController.getAllCourses)

// Delete Course
router.delete(
  '/:id',
  auth(
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  coursesController.deleteCourse,
)

export const CoursesRoutes = router
