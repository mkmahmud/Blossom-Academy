import { Model, Types } from 'mongoose'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IcourseSchedule {
  schedule: [{ title: string; date: string; classNummber: string }]
  batchId: string
  batchTime: string
  BatchTitle: string
}

export type courseScheduleModel = Model<IcourseSchedule>
