import { Model, Types } from 'mongoose'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface INotification {
  status: boolean
  content: string
  link: string
  receiver: string
}

export type NotificationModel = Model<INotification>
