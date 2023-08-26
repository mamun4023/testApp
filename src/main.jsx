import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

// console.log(import.meta.env.VITE_SOME_KEY)

const Stripe = loadStripe(import.meta.env.VITE_SOME_KEY)

ReactDOM.createRoot(document.getElementById('root')).render(

    <Elements stripe={Stripe} > 
      <App />
    </Elements>
)
