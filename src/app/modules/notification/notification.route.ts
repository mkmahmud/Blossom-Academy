import express from 'express'
import { NotificationController } from './notification.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'

const router = express.Router()

// Create Notification
router.post(
  '/',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGEMENT,
  ),
  NotificationController.createNotification,
)

// Create Notification
router.post(
  '/multiple',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGEMENT,
  ),
  NotificationController.createMultipleNotification,
)

// Update Notifications
router.patch('/:id', NotificationController.updateNotifications)

// Get Notifications
router.get('/:id', NotificationController.getNotifications)

export const NotificationRoutes = router
