import express from 'express'
import { UserRoutes } from '../modules/users/users.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { CoursesRoutes } from '../modules/courses/courses.route'
import { batchRoutes } from '../modules/batch/batch.route'
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
]

Routers.forEach(route => routes.use(route.path, route.route))

export default routes
