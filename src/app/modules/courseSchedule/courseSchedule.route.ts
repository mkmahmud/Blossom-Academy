import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'
import { courseScheduleController } from './courseSchedule.controller'

const router = express.Router()

// Create Batch schedule
router.post(
  '/create',
  auth(
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  courseScheduleController.CourseSchedule,
)

// Get Batch Schedule
router.get('/:id', courseScheduleController.getCourseSchedule)

export const CoursesScheduleRoutes = router
