import express from 'express'
import { NewsLatterController } from './newslatter.controller'

const router = express.Router()

// Create Batch
router.post('/', NewsLatterController.insertNewslatterEmail)

export const NewsLatterRoutes = router
