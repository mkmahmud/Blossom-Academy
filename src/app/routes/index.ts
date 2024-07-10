import express from 'express'
import { UserRoutes } from '../modules/users/users.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { CoursesRoutes } from '../modules/courses/courses.route'
import { batchRoutes } from '../modules/batch/batch.route'
import { TeachersRoutes } from '../modules/teacher/teacher.route'
import { StudentsRoutes } from '../modules/student/student.route'
import { PaymentsRoutes } from '../modules/payment/payment.route'
import { NewsLatterRoutes } from '../modules/newslatter/newslatter.route'
import { NotificationRoutes } from '../modules/notification/notification.route'
import { MessengerRoute } from '../modules/messenger/messenger.route'
import { CoursesScheduleRoutes } from '../modules/courseSchedule/courseSchedule.route'
import { EventsRoutes } from '../modules/Events/event.route'
const routes = express.Router()

// Routes
const Routers = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/courses',
    route: CoursesRoutes,
  },
  {
    path: '/batch',
    route: batchRoutes,
  },
  {
    path: '/teachersRoutes',
    route: TeachersRoutes,
  },
  {
    path: '/studentsRoutes',
    route: StudentsRoutes,
  },
  {
    path: '/payments',
    route: PaymentsRoutes,
  },
  {
    path: '/newslatter',
    route: NewsLatterRoutes,
  },
  {
    path: '/notification',
    route: NotificationRoutes,
  },
  {
    path: '/messenger',
    route: MessengerRoute,
  },
  {
    path: '/course-schedule',
    route: CoursesScheduleRoutes,
  },
  {
    path: '/events',
    route: EventsRoutes,
  },
]

Routers.forEach(route => routes.use(route.path, route.route))

export default routes
