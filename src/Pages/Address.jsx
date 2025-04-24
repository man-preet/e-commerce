import React from 'react'
import RazorPayPayment from './RazorPayPayment'
// import { useNavigate } from 'react-router'

import { useLocation,useNavigate } from 'react-router';
const Address = () => {

  const navigate=useNavigate();

  const location=  useLocation();
  console.log(location.state);

  let {price,productName}=location.state || {};

  if(!price || !productName)
    {
      const storedData=localStorage.getItem("orederData");
      if(storedData)
      {
        const parsedData=JSON.parse(storedData);
        price=parsedData.price;
        productName=parsedData.productName;
      }
      else{
        navigate("/");
        return null;

      }
    }

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