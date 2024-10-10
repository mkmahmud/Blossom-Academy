import { Schema, model } from 'mongoose'
import { IEvents, eventsModel } from './events.interface'

const eventsSchema = new Schema<IEvents>(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    agenda: {
      type: String,
      required: true,
    },
    targetAudience: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    speakers: [
      {
        name: { type: String, required: true },
        title: {
          type: String,
          required: true,
        },
      },
    ],
    organizer: [
      {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        id: {
          type: String,
          required: true,
        },
      },
    ],
    materialsNeeded: { type: String, required: true },
    parking: {
      type: Boolean,
    },
    sponsorship: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        index: { type: Number, required: true },
      },
    ],
    cancellationPolicy: { type: String, required: true },
    specialInstructions: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

export const Events = model<IEvents, eventsModel>('events', eventsSchema)
