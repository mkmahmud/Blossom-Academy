import express from 'express'
import { MessengerController } from './messenger.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'

const router = express.Router()

// Get All Messages
router.get(
  '/get-all-messages',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGEMENT,
    ENUM_USER_ROLE.STUDENT,
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.TEACHER,
  ),
  MessengerController.getAllMessages,
)

// Get MEssages
router.get('/:id', MessengerController.GetMessages)

// Get My Contact
router.get('/get-my-contact/:id', MessengerController.getMyContact)

// Add New User into contact
router.post('/', MessengerController.addNewUserIntoContact)

// Insert messages
router.post('/message', MessengerController.insertMessage)

export const MessengerRoute = router
