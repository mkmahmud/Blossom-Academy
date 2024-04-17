import express from 'express'
import { NewsLatterController } from './newslatter.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/userRole'

const router = express.Router()

// Create email into NewsLatter
router.post('/', NewsLatterController.insertNewslatterEmail)

// Get All Email
router.get(
  '/',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGEMENT,
  ),
  NewsLatterController.getAllEmail,
)

export const NewsLatterRoutes = router
