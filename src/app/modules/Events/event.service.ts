import { Events } from './event.model'
import { IEvents } from './events.interface'

// Create A New Event
const createEvent = async (data: IEvents): Promise<IEvents> => {
  const res = await Events.create(data)
  return res
}

// Get short events
const getShortEvents = async () => {
  const res = await Events.find({}).select('date location name _id')
  return res
}

// Export Function
export const eventsServices = {
  createEvent,
  getShortEvents,
}
