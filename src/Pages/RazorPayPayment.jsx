import React from 'react'
import { useNavigate ,useLocation} from 'react-router';


const RazorPayPayment = (props) => {

    const navigate=useNavigate();
    const location=useLocation();


    let {price,productName,category,brand,image}=location.state || {};


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
            navigate("/order",{
              state:{
                paymentStatus:"success",
                orderData:{
                  productName,
                  price,
                  category,
                  brand,
                  image,
                  payment_id:response.razorpay_payment_id,
                }
              }
            }
            );

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
        <div className='RazorPayPayment flex justify-center'>
            {/* <button handlePayment={()=>handlePayment()} onClick={props.handle}>{props.children}</button> */}

            <button onClick={()=>handlePayment()} className="mt-4 px-20 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">{props.children}</button>
        </div>    
    </>
  )
}

export default RazorPayPayment