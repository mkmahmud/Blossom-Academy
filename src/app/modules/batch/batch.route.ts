import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'
import { batchController } from './batch.controller'

const router = express.Router()

// Get All Bacth
router.get('/all-batches', batchController.getAllActiveBatch)

// Create Batch
router.post(
  '/create',
  auth(
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  batchController.createBatch,
)

router.get(
  '/:id',
  auth(
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  batchController.getBatch,
)

// Add Student
router.post(
  '/add-student',
  auth(
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.STUDENT,
  ),
  batchController.addStudentIntoBatch,
)

// Add teacher
router.post(
  '/add-teacher',
  auth(
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  batchController.addTeacherIntoBatch,
)

// Add Course
router.post(
  '/add-course',
  auth(
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  batchController.addCourseIntoBatch,
)

// Get All Bacth
router.get('/', batchController.getAllBatch)

export const batchRoutes = router
