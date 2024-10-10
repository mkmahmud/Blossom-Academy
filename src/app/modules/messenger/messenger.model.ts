import { Schema, model } from 'mongoose'
import {
  IMessenger,
  IMyContact,
  MessengerModel,
  MyContactModel,
} from './messengerinterface.'

const messengerSchema = new Schema<IMessenger>(
  {
    status: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    reciver: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

// My Contact Schema
const myContactSchema = new Schema<IMyContact>(
  {
    reciverImg: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    reciver: {
      type: String,
      required: true,
    },
    reciverName: {
      type: String,
      required: true,
    },
    lastmessages: {
      type: String,
    },
    totalUnrad: {
      type: Number,
    },
    lastMessageTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

export const Messenger = model<IMessenger, MessengerModel>(
  'messenger',
  messengerSchema,
)

export const MytContact = model<IMyContact, MyContactModel>(
  'my_contact',
  myContactSchema,
)
