import { Ipayment } from './payment.interface'
import { Payments } from './payment.model'
import { sslPayments } from './ssl/sslPayment'

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

export const PaymentService = {
  initPayment,
}
