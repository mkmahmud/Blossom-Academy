import { Schema, model } from 'mongoose'
import { CoursesModel, ICourses } from './courses.interface'

const coursesSchema = new Schema<ICourses, CoursesModel>({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
})

export const Courses = model<ICourses, CoursesModel>('courses', coursesSchema)
