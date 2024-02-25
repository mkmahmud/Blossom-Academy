import axios from 'axios'
import config from '../../../../config'

const sslPaymentInit = async (d: any) => {
  try {
    const data = {
      store_id: config.storeId,
      store_passwd: config.storePassword,
      total_amount: d.total_amount,
      currency: 'BDT',
      tran_id: d.tran_id, // use unique tran_id for each api call
      success_url:
        'https://blossom-academy.netlify.app/courses/checkout/success',
      fail_url: 'http://localhost:3030/fail',
      cancel_url: 'http://localhost:3030/cancel',
      ipn_url: 'http://localhost:3030/ipn',
      shipping_method: 'Courier',
      product_name: 'Computer.',
      product_category: 'Electronic',
      product_profile: 'general',
      cus_name: d.cus_name,
      cus_email: d.cus_email,
      cus_add1: d.cus_add1,
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: d.cus_postcode,
      cus_country: 'Bangladesh',
      cus_phone: d.cus_phone,
      cus_fax: '01711111111',
      ship_name: 'Customer Name',
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh',
    }

    //
    const response = await axios({
      method: 'POST',
      url: config.paymentURL,
      data: data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })

    return response.data.redirectGatewayURL
  } catch (err) {
    console.log(err)
  }
}

// Validate payment
const validate = async (data: any) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${config.validateURL}?val_id=${data.val_id}&store_id=${config.storeId}&store_passwd=${config.storePassword}&format=json`,
    })

    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const sslPayments = {
  sslPaymentInit,
  validate,
}
