import { Model, Types } from 'mongoose'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IBatch {
  title: string
  studentsId: [{ id: Types.ObjectId }]
  startTime: string
  teachersId: [{ id: Types.ObjectId }]
  courseId: [{ id: Types.ObjectId }]
  status: boolean
  category: string
  thambnail: string
  session: string
}

export type BatchModel = Model<IBatch>
