import { Ipayment } from './payment.interface'
import { Payments } from './payment.model'
import { sslPayments } from './ssl/sslPayment'

// Init Payment
const initPayment = async (data: Ipayment): Promise<Object | String> => {
  const userData = {
    total_amount: data.amount,
    tran_id: data.tranID,
    cus_name: data.fullName,
    cus_email: data.email,
    cus_add1: data.address,
    cus_postcode: data.zipCode,
    cus_phone: data.phone,
  }
  const paymentInit = await sslPayments.sslPaymentInit(userData)

  // Create Data Into Our Database
  await Payments.create(data)

  return paymentInit
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
}
