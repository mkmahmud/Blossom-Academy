import { INewsLatter } from './newslatter.interface'
import { NewsLatter } from './newslatter.model'

// Insert email
const insertNewslatterEmail = async (
  data: INewsLatter,
): Promise<INewsLatter> => {
  const res = await NewsLatter.create(data)
  return res
}

// GEt All email
const getAllEmail = async () => {
  const res = await NewsLatter.find({})
  return res
}

//
export const NewsLatterService = {
  insertNewslatterEmail,
  getAllEmail,
}
