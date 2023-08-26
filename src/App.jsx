import {
  CardNumberElement,
  useStripe,
  useElements,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js'
import { useState } from 'react'


const cardStyle = {
  border : "1px solid gray",
  padding : "10px",
  borderRadius : "10px",
  margin : "10px"
}

function App() {
  
  const stripe = useState();
  const elements = useElements();


  return (
    <>
      <div>
             <div style={cardStyle}>
                <CardNumberElement  options={{
                   showIcon : true
                   
                }} />
             </div>
             <div style={cardStyle}>
                <CardExpiryElement />
             </div>
             <div style={cardStyle}>
                <CardCvcElement />
             </div>
      </div>
    </>
  )
}

export default App
