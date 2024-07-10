import { Model, Types } from 'mongoose'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IEvents {
  name: string
  date: string
  location: string
  description: string
  agenda: string
  organizer: {
    name: string
    email: string
    id: string
  }
  targetAudience: string
  speakers: [
    {
      name: string
      title: string
    },
  ]
  materialsNeeded: string
  parking: boolean
  sponsorship: [{ name: string; image: string; index: number }]
  cancellationPolicy: string
  specialInstructions: string
}

export type eventsModel = Model<IEvents>
