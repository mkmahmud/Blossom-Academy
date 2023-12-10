import { Model } from 'mongoose'

export interface ICourses {
  title: string
  code: string
  status: boolean
  thumbnail: string
}

export type CoursesModel = Model<ICourses>
