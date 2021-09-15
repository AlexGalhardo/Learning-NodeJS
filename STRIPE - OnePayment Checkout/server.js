const stripe = require('stripe')('sk_test_');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    customer_email: 'aleexgalhardoo@example.com',
    submit_type: 'pay',
    billing_address_collection: 'auto',
    // currency: 'brl',
    // locale: 'pt-BR',
    shipping_address_collection: {
      allowed_countries: ['BR'],
    },
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        price: 'price_1JZiiiHoneB4ZvrpBtdzXbqI',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card'
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url)
});

app.listen(4242, () => console.log('Running on port 4242'));