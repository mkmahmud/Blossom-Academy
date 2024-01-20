import { IStudent } from './student.Interface'
import { Students } from './student.model'

// Create
const createTeacher = async (data: IStudent): Promise<IStudent> => {
  const res = await Students.create(data)
  return res
}

// Update Teacher data

const updateStudent = async (
  student: string,
  data: Partial<IStudent>,
): Promise<Partial<IStudent> | null> => {
  // Using findOneAndUpdate to find the teacher by ID and update the specified fields
  const updateStudent = await Students.findOneAndUpdate(
    { userId: student },
    { $set: data }, // The $set operator updates only the specified fields in 'data'
    { new: true, useFindAndModify: false }, // Options to return the updated document and avoid deprecated warning
  )

  return updateStudent
}

export const StudentsService = {
  createTeacher,
  updateStudent,
}
