import React from 'react'
import Navbar from '../Components/Navigation/Navbar'
import { useNavigate } from 'react-router'


const AboutUs = () => {

    const navigate=useNavigate();

    const handleContact=()=>{
        navigate("/contactus")
    }
  return (
    <>
        <Navbar/>
        <div className="aboutUs w-11/12 max-w-6xl mx-auto mt-10 px-4">
  <div className="about text-center bg-white shadow-md rounded-lg p-8">
    <h1 className="font-semibold text-4xl text-gray-800">About Shopease</h1>
    <h2 className="font-medium text-2xl mt-4 italic text-gray-600">
      Your go-to destination for smart, seamless shopping.
    </h2>

    {/* Who We Are */}
    <div className="mt-8">
      <h3 className="text-xl font-semibold underline mb-2 text-gray-800">Who we are?</h3>
      <p className="text-gray-700">
        Shopease is a modern online shopping platform designed to make your shopping journey easier,
        faster, and more enjoyable. We aim to provide a seamless experience from product discovery to
        secure payments.
      </p>
    </div>

    {/* Our Mission */}
    <div className="mt-8">
      <h3 className="text-xl font-semibold underline mb-2 text-gray-800">Our Mission</h3>
      <p className="text-gray-700">
        Our mission is to simplify e-commerce for everyone by offering a user-friendly interface,
        curated product listings, and secure payment options including UPI, card, and QR code.
      </p>
    </div>

    {/* What We Offer */}
    <div className="mt-8 text-left md:text-center">
      <h3 className="text-xl font-semibold underline mb-2 text-gray-800 text-center">What we offer?</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Wide range of quality products</li>
        <li>Easy and intuitive shopping experience</li>
        <li>Multiple secure payment options (Razorpay, UPI, QR Scan)</li>
        <li>Cart management and instant checkout</li>
      </ul>
    </div>

    {/* Why Choose Us */}
    <div className="mt-8">
      <h3 className="text-xl font-semibold underline mb-2 text-gray-800">Why Choose Us?</h3>
      <p className="text-gray-700">
        We combine technology with convenience. With Shopease, you don’t just shop—you enjoy the journey.
        Whether you're buying your first item or managing a cart full of favorites, we’re here to make it smooth.
      </p>
    </div>

    {/* Contact Info */}
    <div className="mt-8">
      <h3 className="text-xl font-semibold underline mb-2 text-gray-800">Need Help?</h3>
      <p className="text-gray-700">
        Got questions? Reach out to us at <strong>support@shopease.com</strong>
      </p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded transition duration-300"
        onClick={() => handleContact()}
      >
        Contact Us
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default AboutUs