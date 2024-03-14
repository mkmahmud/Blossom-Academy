import config from '../../../../config'

const stripe = require('stripe')(config.stripeSecret)

export const initPayment = async (data: any) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: data?.courseName,
            },
            unit_amount: Math.round(data?.amount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `http://localhost:3000/courses/checkout/success/${data?.userId}/${data?.tranID}`,
      cancel_url: 'http://localhost:3000/notfound',
    })

    return session.url
  } catch (err) {
    console.log(err)
  }
}

export const stripePayment = {
  initPayment,
}
