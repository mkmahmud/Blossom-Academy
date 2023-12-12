import { Model } from 'mongoose'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IBatch {
  title: string
  studentsId: []
  startTime: string
  teachersId: []
  courseId: []
  status: boolean
  category: string
}

export type BatchModel = Model<IBatch>
