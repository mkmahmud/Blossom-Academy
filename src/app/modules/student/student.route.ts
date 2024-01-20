import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'
import { StudentController } from './student.controller'

const router = express.Router()

// Update Teacher
router.patch(
  '/updateStudent/:id',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentController.updateStudent,
)

export const StudentsRoutes = router
