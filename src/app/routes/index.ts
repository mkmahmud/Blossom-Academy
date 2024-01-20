import express from 'express'
import { UserRoutes } from '../modules/users/users.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { CoursesRoutes } from '../modules/courses/courses.route'
import { batchRoutes } from '../modules/batch/batch.route'
import { TeachersRoutes } from '../modules/teacher/teacher.route'
import { StudentsRoutes } from '../modules/student/student.route'
import { PaymentsRoutes } from '../modules/payment/payment.route'
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
]

Routers.forEach(route => routes.use(route.path, route.route))

export default routes
