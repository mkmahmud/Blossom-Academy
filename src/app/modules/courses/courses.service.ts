import { ICourses } from './courses.interface'
import { Courses } from './courses.model'

// Create
const createCourse = async (data: ICourses): Promise<ICourses> => {
  const res = await Courses.create(data)
  return res
}

// Get All Courses
const getAllCourses = async (): Promise<ICourses | Object> => {
  const res = await Courses.find({})
  return res
}

// Delete Course
const deleteCourse = async (id: string): Promise<void | object> => {
  const res = await Courses.deleteOne({ _id: id })
  return res
}

export const CoursesService = {
  createCourse,
  getAllCourses,
  deleteCourse,
}
