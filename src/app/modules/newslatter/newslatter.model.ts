import { Schema, model } from 'mongoose'
import { INewsLatter, NewsLatterModel } from './newslatter.interface'

const newslatterSchema = new Schema<INewsLatter>(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const NewsLatter = model<INewsLatter, NewsLatterModel>(
  'newslatter',
  newslatterSchema,
)
