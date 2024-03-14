import { Ipayment } from './payment.interface'
import { Payments } from './payment.model'
import { sslPayments } from './ssl/sslPayment'
import { stripePayment } from './stripe/stripe.payment'

// Init Payment
const initPayment = async (data: Ipayment): Promise<Object | String> => {
  // const userData = {
  //   total_amount: data.amount,
  //   tran_id: data.tranID,
  //   cus_name: data.fullName,
  //   cus_email: data.email,
  //   cus_add1: data.address,
  //   cus_postcode: data.zipCode,
  //   cus_phone: data.phone,
  // }
  // const paymentInit = await sslPayments.sslPaymentInit(userData)

  // // Create Data Into Our Database

  const paymentInit = await stripePayment.initPayment(data)

  if (paymentInit) {
    // console.log('object')
    await Payments.create(data)
  }

  // @ts-ignore
  return paymentInit
}

// validateAndUpdate
const validateAndUpdate = async (data: {
  id: string
  tranID: string
}): Promise<Object | String> => {
  // Check if payment valid or not
  const checkPayment = await Payments.findOne({
    userId: data?.id,
    tranID: data?.tranID,
  })

  if (!checkPayment) {
    return { message: 'Invalid payment' }
  }

  if (checkPayment) {
    const updatedpayment = await Payments.findOneAndUpdate(
      {
        userId: data?.id,
        tranID: data?.tranID,
      },
      { $set: { status: true } },
      { new: true },
    )
    return { message: 'Payment Success', batchId: updatedpayment?.courseId }
  }

  // @ts-ignore
  return
}

// Valdiate Payment Webhook
const webHook = async (data: any) => {
  if (!data) {
    return {
      message: 'invalid payment',
    }
  }
  const result = await sslPayments.validate(data)
  // console.log(result)
  // if (result?.status !== 'VALID') {
  //   return {
  //     message: 'payment Failed',
  //   }
  // }
  // const { tran_id } = result
  // await Payments.findOneAndUpdate(
  //   { tranID: tran_id },
  //   {
  //     status: true,
  //   },
  // )
  // console.log(result)
  return result
}

export const PaymentService = {
  initPayment,
  webHook,
  validateAndUpdate,
}
