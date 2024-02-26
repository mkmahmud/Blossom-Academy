import { Schema, model } from 'mongoose'
import { INotification, NotificationModel } from './notification.interface'

const notificationSchemaF = new Schema<INotification>(
  {
    status: {
      type: Boolean,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Notification = model<INotification, NotificationModel>(
  'notification',
  notificationSchemaF,
)
