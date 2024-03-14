import { Schema, Types, model } from 'mongoose'
import { Ipayment, PaymentModel } from './payment.interface'

const paymentSchema = new Schema<Ipayment>({
  fullName: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  zipCode: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  currency: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  tranID: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
})

export const Payments = model<Ipayment, PaymentModel>('payments', paymentSchema)
