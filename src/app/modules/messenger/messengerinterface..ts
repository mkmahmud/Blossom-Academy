import { Model } from 'mongoose'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IMessenger {
  status: boolean
  message: string
  sender: string
  reciver: string
}

// My Contact
export interface IMyContact {
  role: string
  sender: string
  reciver: string
  reciverName: string
  reciverImg: string
  lastmessages: string
  totalUnrad: number
  lastMessageTime: string
}

export type MessengerModel = Model<IMessenger>
export type MyContactModel = Model<IMyContact>
