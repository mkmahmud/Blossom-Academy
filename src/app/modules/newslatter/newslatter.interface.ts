import { Model, Types } from 'mongoose'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface INewsLatter {
  email: string
}

export type NewsLatterModel = Model<INewsLatter>
