import { Messenger, MytContact } from './messenger.model'
import { IMessenger, IMyContact } from './messengerinterface.'

export const getMessage = (socket: any) => {}

// Insert Messages
const InsertMessage = async (data: IMessenger): Promise<IMessenger> => {
  const res = await Messenger.create(data)
  return res
}

// Get Messages
const getAllMessages = async (sender: string, reciver: string) => {
  const messagesSent = await Messenger.find({
    sender,
    reciver,
  })

  const messagesReceived = await Messenger.find({
    sender: reciver,
    reciver: sender,
  })

  const combinedMessages = [...messagesSent, ...messagesReceived]

  return combinedMessages
}

// Get All Users chat with me
const getAllEngagedUsers = async (id: any) => {
  const res = await Messenger.find({ sender: id })
  return res
}

// Add new User Into my contact
const addNewUserIntoMyContact = async (data: IMyContact) => {
  const getMyContacts = await MytContact.find({
    sender: data?.sender,
    reciver: data?.reciver,
  })

  // @ts-ignore
  if (getMyContacts[0]?._id) {
    return { message: 'already in contact' }
  }

  const res = await MytContact.create(data)
  return res
}

// Get my contacts
const getMyContact = async (id: string) => {
  const res = await MytContact.find({ sender: id })
  return res
}

export const MessengerService = {
  InsertMessage,
  getAllMessages,
  getAllEngagedUsers,
  addNewUserIntoMyContact,
  getMyContact,
}
