import { IBatch } from './batch.interface'
import { Batch } from './batch.model'

// Create Batch
const createBatch = async (data: IBatch): Promise<IBatch> => {
  const res = await Batch.create(data)
  return res
}

export const BatchService = {
  createBatch,
}
