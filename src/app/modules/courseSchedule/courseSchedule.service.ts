import { IcourseSchedule } from './courseSchedule.interface'
import { CourseSchedule } from './courseSchedule.model'

// Create
const createCourseSchedule = async (
  data: IcourseSchedule,
): Promise<IcourseSchedule> => {
  const res = await CourseSchedule.create(data)
  return res
}

// Get
const getCourseSchedule = async (id: string) => {
  const res = await CourseSchedule.findOne({ batchId: id })
  return res
}

export const courseScheduleService = {
  createCourseSchedule,
  getCourseSchedule,
}
