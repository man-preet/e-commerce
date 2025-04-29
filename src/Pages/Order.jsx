import React from 'react'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'
import { useLocation ,useNavigate} from 'react-router'
const Order = () => {

const location=useLocation();
const navigate=useNavigate();


const {paymentStatus,orderData}= location.state || {};

React.useEffect(() => {
  if (!orderData) {
    navigate("/order");
  }
}, [orderData, navigate]);

if (!orderData) return null;


const { productName, price, image, brand, category, paymentId } = orderData;

const handleCancelOrder=()=>{
    console.log("Order is Canceled");
    navigate("/home");

}
//   const handleView=(id)=>{
//     console.log(id);



//     navigate(`/products/${encodeURIComponent(id)}`);

// }
  return (
    <>
        <Navbar/>

        <div className="flex gap-6 mb-4 border-b p-4">
              <img src={image} alt={productName} className="w-32 h-32 object-contain" />
              <div>
                <h2 className="text-xl font-semibold">{productName}</h2>
                <p>Brand: {brand}</p>
                <p>Category: {category}</p>
                <p>Price: ₹{price}</p>
                <p>Payment Status:{paymentStatus === "success" ? "Payment Successful" : "Payment Failed"}</p>
                <p>Payment ID:{paymentId}</p>
                <div className="btns flex gap-6">
                <button className="mt-2 text-red-500 cursor-pointer"  onClick={()=>handleCancelOrder()}>
                  Cancel Order
                </button>
                </div>
              </div>
            </div>
        <Footer/>
    </>
  )
}

export default Order