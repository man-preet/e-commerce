import React from 'react'
import RazorPayPayment from './RazorPayPayment'
// import { useNavigate } from 'react-router'

import { useLocation } from 'react-router';
const Address = () => {

  const location=  useLocation();
  console.log(location.state);
  
  const {price,productName}=location.state || {};

  return (
    <>
        <div className='Address'>
            address
            <RazorPayPayment price= {price} name={productName}>
              Pay {price}
              </RazorPayPayment>
            
        </div>
    </>
  )
}

export default Address