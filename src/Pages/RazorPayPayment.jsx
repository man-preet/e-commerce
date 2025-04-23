import React from 'react'
import { useNavigate } from 'react-router';


const RazorPayPayment = (props) => {

    const navigate=useNavigate();

    const handlePayment = () => {
        const options = {
          key: "rzp_test_MGDf0CBFY73WbJ",
          amount: props.price *100, // Amount is in **paise** (50000 paise = ₹500)
          currency: "INR",
          name: `Purchase of ${props.name} `,
          description: "Test Transaction",
        //   image: "https://your_logo_url.com/logo.png", // optional
          handler: function (response) {
            // alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            console.log(response.razorpay_payment_id);
            navigate("/");

          },
          method: {
            upi: true,
            card: true,
            netbanking: true,
            wallet: true,
            emi: true,
          },
          prefill: {
            name: "Test User",
            email: "test.user@example.com",
            contact: "7528841665",
          },
          notes: {
            address: "Test Address",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      };

      

  return (
    <>
        <div className='RazorPayPayment'>
            {/* <button handlePayment={()=>handlePayment()} onClick={props.handle}>{props.children}</button> */}

            <button onClick={()=>handlePayment()}>{props.children}</button>
        </div>    
    </>
  )
}

export default RazorPayPayment