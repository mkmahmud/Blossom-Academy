import { Schema, Types, model } from 'mongoose'
import { BatchModel, IBatch } from './batch.interface'

const batchSchema = new Schema<IBatch>({
  title: {
    type: String,
    required: true,
  },
  studentsId: [
    {
      id: { type: Schema.Types.ObjectId, ref: 'users' },
    },
  ],
  teachersId: [
    {
      id: { type: Schema.Types.ObjectId, ref: 'users' },
    },
  ],
  courseId: [
    {
      id: { type: Schema.Types.ObjectId, ref: 'courses' },
    },
  ],
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
  thambnail: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
})

export const Batch = model<IBatch, BatchModel>('batch', batchSchema)
