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
        <div className="aboutUs w-10/12 flex justify-center mx-auto mt-10 ">
            <div className='about w-11/12 text-center'>
                <h1 className='font-medium text-4xl'>About Shopease</h1>
                <h2 className='font-medium text-2xl mt-5 italic '>Your go-to destination for smart, seamless shopping.</h2>
                <h3 className='mt-5 font-medium text-xl underline'>Who we are?</h3>
                <p>Shopease is a modern online shopping platform designed to make your shopping journey easier, faster, and more enjoyable. We aim to provide a seamless experience from product discovery to secure payments.</p>
                <h3 className='mt-5 font-medium text-xl underline'>Our Mission</h3>
                <p>Our mission is to simplify e-commerce for everyone by offering a user-friendly interface, curated product listings, and secure payment options including UPI, card, and QR code.</p>
                <h3 className='mt-5 font-medium text-xl underline'>What we offer?</h3>
                <ul className=" ml-6 mb-4">
                    <li> Wide range of quality products</li>
                    <li>Easy and intuitive shopping experience</li>
                    <li> Multiple secure payment options (Razorpay, UPI, QR Scan)</li>
                    <li> Cart management and instant checkout</li>
                </ul>

                <h3 className='mt-5 font-medium text-xl underline'>Why Choose Us?</h3>
                <p>We combine technology with convenience. With Shopease, you don’t just shop—you enjoy the journey. Whether you're buying your first item or managing a cart full of favorites, we’re here to make it smooth.</p>
                
                <h3 className='mt-5 font-medium text-xl underline'>Why Choose Us?</h3>
                <p>Got questions? Reach out to us at <strong>support@shopease.com</strong></p>
                <button className='contact rounded bg-blue-500 px-4 py-2 mt-4 text-white cursor-pointer' onClick={()=>handleContact()}>Contact Us</button>
            </div>
            

        </div>
    </>
  )
}

export default AboutUs