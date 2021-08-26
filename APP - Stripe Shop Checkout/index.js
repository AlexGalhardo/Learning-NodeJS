// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

// 4242 4242 4242 4242

require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');

const stripe = require('stripe')(process.env.STRIPE_SK_TEST)

const mustache = require('mustache-express');

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/success', (req, res) => {
  res.render('pages/success')
})

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Oranges',
          },
          unit_amount: 49,
        },
        quantity: 2,
      },
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Grapes',
          },
          unit_amount: 99,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Apples',
          },
          unit_amount: 199,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Strawberries',
          },
          unit_amount: 299,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:4242/success',
    cancel_url: 'http://localhost:4242',
  });

  res.redirect(303, session.url);
});

// curl -X POST -is "http://localhost:4242/create-checkout-session" -d ""

app.listen(4242, () => console.log(`Listening on port ${4242}!`));
