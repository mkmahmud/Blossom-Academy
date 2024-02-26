import { INotification } from './notification.interface'
import { Notification } from './notification.model'

// Create Notification
const createNotification = async (
  data: INotification,
): Promise<INotification> => {
  const res = await Notification.create(data)
  return res
}

// Get Notifications
const getNotifications = async (id: string): Promise<INotification | any> => {
  const res = await Notification.find({ receiver: id })
  return res
}

//
export const NotificationService = {
  createNotification,
  getNotifications,
}
