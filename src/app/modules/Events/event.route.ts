import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'
import { eventsController } from './event.controller'

const router = express.Router()

// Create Event
router.post(
  '/create',
  auth(
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  eventsController.createEvent,
)

// Get short Events
router.get('/', eventsController.getShortEvents)

// Get Event Details
router.get('/:id', eventsController.getEventDetails)

export const EventsRoutes = router
