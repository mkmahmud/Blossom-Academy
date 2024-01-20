import { ITeacher } from './teacher.interface'
import { Teachers } from './teacher.model'

// Create
const createTeacher = async (data: ITeacher): Promise<ITeacher> => {
  const res = await Teachers.create(data)
  return res
}

// Update Teacher data

const updateTeacher = async (
  teacherId: string,
  data: Partial<ITeacher>,
): Promise<Partial<ITeacher> | null> => {
  // Using findOneAndUpdate to find the teacher by ID and update the specified fields
  const updatedTeacher = await Teachers.findOneAndUpdate(
    { userId: teacherId },
    { $set: data }, // The $set operator updates only the specified fields in 'data'
    { new: true, useFindAndModify: false }, // Options to return the updated document and avoid deprecated warning
  )

  return updatedTeacher
}

// Get All Teachers
const getAllTeacher = async () => {
  const res = await Teachers.find({})
  return res
}

// Get Single Teachers
const getSingleTeacher = async (id: any) => {
  const res = await Teachers.findById(id)
  return res
}

export const TeachersService = {
  createTeacher,
  updateTeacher,
  getAllTeacher,
  getSingleTeacher,
}
