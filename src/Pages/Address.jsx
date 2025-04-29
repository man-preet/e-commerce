import React, {useContext ,useEffect,useState} from 'react'
import RazorPayPayment from './RazorPayPayment'
import { useNavigate } from 'react-router'

import { useLocation } from 'react-router-dom';
import  AuthContext from '../Context/AuthContext.jsx';
import Navbar from '../Components/Navigation/Navbar.jsx'
import Footer from '../Components/Navigation/Footer'
import Swal from 'sweetalert2';
// import {auth,db} from '../Firebase/Firebase.js'


const Address = () => {

  const navigate=useNavigate();
  const {address,updateAddress}=useContext(AuthContext);

  const [newAddress,setNewAddress]=useState(address|| {house:'' ,street:'', city:'' ,state:'',pincode:' '});


  console.log(newAddress);

  const location=  useLocation();
  console.log(location);

  useEffect(()=>{
    if(address)
      {
        console.log(address);

        setNewAddress(address);

      } },[address])

  let {price,productName}=location.state || {};

  if(!price || !productName)
    {
      const storedData=localStorage.getItem("orderData");
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

    const handleSave=()=>{
      if(Object.values(newAddress).some((field)=>field.trim()===""))
        {
          Swal.fire("Please Enter an Address");
          return;
        }
      updateAddress(newAddress);
      Swal.fire({
        icon: "success",
        text:"Address updated Successfully",
        timer:1500,
        showConfirmButton:false
      });
      

    }
   
    const fullAddress=`${address.house},${address.street},${address.city},${address.state} ,${address.pincode}`

  return (
    <>
        <Navbar/>
        <div className='Address'>
        <div className="w-10/12 mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-6">Your Address</h1>
        <div>
            <label className="block text-lg">House:</label>
            <input
              type="text"
              className="w-full p-4 border rounded"
              value={newAddress.house}
              onChange={(e) => setNewAddress({ ...newAddress, house: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-lg">Street:</label>
            <input
              type="text"
              className="w-full p-4 border rounded"
              value={newAddress.street}
              onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-lg">City:</label>
            <input
              type="text"
              className="w-full p-4 border rounded"
              value={newAddress.city}
              onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-lg">State:</label>
            <input
              type="text"
              className="w-full p-4 border rounded"
              value={newAddress.state}
              onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-lg">Pincode:</label>
            <input
              type="text"
              className="w-full p-4 border rounded"
              value={newAddress.pincode}
              onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
            />
          </div>
        <button
          onClick={handleSave}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save Address
        </button>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Saved Address:</h2>
          <p className="mt-2">{fullAddress || "No address saved yet."}</p>
        </div>
      </div>
            <RazorPayPayment price= {price} name={productName} >
              Pay {price}
              </RazorPayPayment>
          
          </div>

        <Footer/>
    </>
  )
}

export default Address