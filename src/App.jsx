import {
  CardNumberElement,
  useStripe,
  useElements,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js'
import { useState } from 'react'

function App() {
  
  const stripe = useState();
  const elements = useElements();


  return (
    <>
      <div>
             <div>
                <CardNumberElement  />
             </div>
             <div>
                <CardExpiryElement />
             </div>
             <div>
                <CardCvcElement />
             </div>
      </div>
    </>
  )
}

export default App
