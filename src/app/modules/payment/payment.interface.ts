import { Model } from 'mongoose'

export interface Ipayment {
  userId: string
  fullName: string
  phone: string
  address: string
  zipCode: string
  amount: number
  currency: string
  method: string
  status: boolean
  tranID: string
  courseId: string
  email: string
  courseName: string
}

export type PaymentModel = Model<Ipayment>
