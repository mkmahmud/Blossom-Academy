import { Schema, model } from 'mongoose'
import {
  IcourseSchedule,
  courseScheduleModel,
} from './courseSchedule.interface'

const CourseScheduleSchema = new Schema<IcourseSchedule>(
  {
    schedule: [
      {
        title: {
          type: String,
          required: true,
        },
        date: {
          type: String,
          required: true,
        },
        classNummber: {
          type: String,
          required: true,
        },
      },
    ],
    batchId: {
      type: String,
      required: true,
    },
    batchTime: {
      type: String,
      required: true,
    },
    BatchTitle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const CourseSchedule = model<IcourseSchedule, courseScheduleModel>(
  'courseschedule',
  CourseScheduleSchema,
)
