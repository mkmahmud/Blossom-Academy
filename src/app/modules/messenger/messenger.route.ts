import express from 'express'
import { MessengerController } from './messenger.controller'

const router = express.Router()

// Get MEssages
router.get('/:id', MessengerController.GetMessages)

// Get My Contact
router.get('/get-my-contact/:id', MessengerController.getMyContact)

// Add New User into contact
router.post('/', MessengerController.addNewUserIntoContact)

export const MessengerRoute = router
