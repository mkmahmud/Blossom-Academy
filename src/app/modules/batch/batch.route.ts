import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'
import { batchController } from './batch.controller'

const router = express.Router()

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

export const batchRoutes = router
