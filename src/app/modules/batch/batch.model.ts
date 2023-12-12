import { Schema, Types, model } from 'mongoose'
import { BatchModel, IBatch } from './batch.interface'

const batchSchema = new Schema<IBatch>({
  title: {
    type: String,
    required: true,
  },
  studentsId: {
    type: [Types.ObjectId],
    required: true,
  },
  teachersId: {
    type: [Types.ObjectId],
    required: true,
  },
  courseId: {
    type: [Types.ObjectId],
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})

export const Batch = model<IBatch, BatchModel>('batch', batchSchema)
