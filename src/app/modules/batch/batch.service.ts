import mongoose, { Types } from 'mongoose'
import { IBatch } from './batch.interface'
import { Batch } from './batch.model'
const { ObjectId } = mongoose.Types

// Create Batch
const createBatch = async (data: IBatch): Promise<IBatch> => {
  const res = await Batch.create(data)
  return res
}

// GEt  Batch
const getBatch = async (id: string): Promise<IBatch | null | any> => {
  try {
    const batch = await Batch.findById(id)
      .populate('studentsId.id', 'email fullName userId')
      .populate('teachersId.id', 'email fullName userId')
      .populate('courseId.id', 'title code')
      .exec()

    return batch
  } catch (error) {
    console.error('Error getting batch with populated fields:', error)
    return null
  }
}

// Update Batch Status
const updateBatchStatus = async (
  id: any,
  status: any,
): Promise<IBatch | null | any> => {
  try {
    const batch = await Batch.findOneAndUpdate(
      { _id: id },
      { $set: { status: status } },
      { new: true, useFindAndModify: false },
    )

    return batch
  } catch (error) {
    console.error('Error getting batch with populated fields:', error)
    return null
  }
}
// GEt  All Batch
const getAllBatch = async (): Promise<IBatch | null | any> => {
  try {
    const batch = await Batch.find({})
      .populate('studentsId.id', 'email fullName userId')
      .populate('teachersId.id', 'email fullName userId')
      .populate('courseId.id', 'title code')
      .exec()

    return batch
  } catch (error) {
    console.error('Error getting batch with populated fields:', error)
    return null
  }
}

// GEt  All Batch
const getAllActiveBatch = async (): Promise<IBatch | null | any> => {
  try {
    const batch = await Batch.find({ status: true })
      .populate('studentsId.id', 'email fullName')
      .exec()

    return batch
  } catch (error) {
    console.error('Error getting batch with populated fields:', error)
    return null
  }
}

// Add Student
const addStudentIntoBatch = async (
  studentId: string,
  batchId: string,
): Promise<IBatch | null | string> => {
  const batch = await Batch.findById(batchId)
  if (!batch) {
    return null
  }

  // Check if the length of studentsId is less than 3
  if (batch.studentsId.length < 30) {
    // Check if the studentId already exists in studentsId
    const studentExists = batch.studentsId.some(student =>
      student.id.equals(new Types.ObjectId(studentId)),
    )

    if (studentExists) {
      return 'student already exists'
    }

    // If the studentId does not exist, add it to the studentsId array
    if (!studentExists) {
      batch.studentsId.push({ id: new Types.ObjectId(studentId) })

      // Save the updated batch
      await batch.save()
    }
  } else {
    return "Doesn't have any seats"
  }

  // Retrieve the batch after the update
  const updatedBatch = await Batch.findById(batchId)
  return updatedBatch
}

// Add Teacher Into the batch
const addTeacherIntoBatch = async (
  teacherId: string,
  batchId: string,
): Promise<IBatch | null | string> => {
  const batch = await Batch.findById(batchId)

  if (!batch) {
    return null
  }

  // Check if the Teacher already exists inteacherId
  const teacherExists = batch.teachersId.some(teacher =>
    teacher.id.equals(new Types.ObjectId(teacherId)),
  )

  if (teacherExists) {
    return 'Teacher already exists'
  }

  // If the teacherId does not exist, add it to the teachersId array
  if (!teacherExists) {
    batch.teachersId.push({ id: new Types.ObjectId(teacherId) })

    // Save the updated batch
    await batch.save()
  }

  // Retrieve the batch after the update
  const updatedBatch = await Batch.findById(batchId)
  return updatedBatch
}

// Add Course Into the batch
const addCourseIntoBatch = async (
  courseId: string,
  batchId: string,
): Promise<IBatch | null | string> => {
  const batch = await Batch.findById(batchId)

  if (!batch) {
    return null
  }

  // Check if the Teacher already exists inteacherId
  const courseExist = batch.courseId.some(course =>
    course.id.equals(new Types.ObjectId(courseId)),
  )

  if (courseExist) {
    return 'Course already exists'
  }

  // If the teacherId does not exist, add it to the teachersId array
  if (!courseExist) {
    batch.courseId.push({ id: new Types.ObjectId(courseId) })

    // Save the updated batch
    await batch.save()
  }

  // Retrieve the batch after the update
  const updatedBatch = await Batch.findById(batchId)

  return updatedBatch
}

// Get If Student enrolled Batch
const studentEnrolledBatch = async (
  studentId: string,
): Promise<IBatch | null | string | any> => {
  const batch = await Batch.find({ 'studentsId.id': studentId })
    .populate('studentsId.id', 'email fullName')
    .populate('teachersId.id', 'email fullName')
    .populate('courseId.id', 'title code')
    .exec()

  return batch
}

export const BatchService = {
  createBatch,
  getBatch,
  updateBatchStatus,
  addStudentIntoBatch,
  addTeacherIntoBatch,
  addCourseIntoBatch,
  getAllBatch,
  getAllActiveBatch,
  studentEnrolledBatch,
}
