import React, { useEffect, useState } from 'react'
// import ProductCard from '../Components/UI/ProductCard'
import { useNavigate } from 'react-router'
import Navbar from '../Components/Navigation/Navbar';
import Footer from '../Components/Navigation/Footer';

const Cart = () => {
  const [cartItems,setCartItems]=useState([]);
  const [total,setTotal]=useState(0);
  const navigate=useNavigate();
  

  useEffect(()=>{
    const storedItems=JSON.parse(localStorage.getItem("cartItems")) ||[];
    setCartItems(storedItems);
    console.log(storedItems);


    const totalAmount=storedItems.reduce((sum,items)=>sum+Number(items.price),0);
    setTotal(totalAmount);
    console.log(totalAmount);

  },[]);

  const handleRemove = (id) =>{
    const updatedCart=cartItems.filter((items)=>items.id !== id);
    setCartItems(updatedCart);
    console.log(updatedCart);

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));



    const totalAmount=updatedCart.reduce((sum,items)=>sum+Number(items.price),0);
    setTotal(totalAmount);
    console.log(totalAmount);
  }




  const handleView=(id)=>{
    console.log(id);

    navigate(`/products/${encodeURIComponent(id)}`);

}
  return (
    <>
      <Navbar/>
      <div className="w-10/12 mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex gap-6 mb-4 border-b p-4">
              <img src={item.image} alt={item.productName} className="w-32 h-32 object-contain" />
              <div>
                <h2 className="text-xl font-semibold">{item.productName}</h2>
                <p>Brand: {item.brand}</p>
                <p>Category: {item.category}</p>
                <p>Price: ₹{item.price}</p>
                <div className="btns flex gap-6">
                <button className="mt-2 text-red-500 cursor-pointer" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
                <button className='mt-2 px-4 py-2 font-medium bg-yellow-400 border rounded cursor-pointer' onClick={()=>handleView(item.id)}>View Details </button>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="text-right mt-6 text-xl font-bold">
          Total: ₹{total}
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Cart