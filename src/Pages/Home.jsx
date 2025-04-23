import React from 'react'
import Navbar from '../Components/Navigation/Navbar.jsx'
import Footer from '../Components/Navigation/Footer'
import CategoryCard from '../Components/UI/CategoryCard.jsx';


const Home = () => {
  return (
        <>
        <Navbar/>

        <main className='mt-1'>
          {/* hero content  */}
          <div className="hero-content">
            <div className=" relative background-image bg-[url('/Assets/Images/background-image.jpg')] bg-center bg-cover h-96 text-center shadow-md bg-no-repeat py-24 text-white">
            <div className="absolute -inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
            <h1 className="relative text-4xl font-bold z-50">"Shop Smart, Live Stylishly."</h1>
            <p className=" relative mt-4 z-50">Make informed purchases to enhance your personal style....</p>
            <button className=' relative my-24 text-lg font-bold bg-blue-500 z-50 p-4 rounded-4xl cursor-pointer'>Explore Offers</button>
            </div>
          </div>

          {/* Categories section */}

          <div className="categories mt-10  w-10/12 mx-auto">
            <h1 className='text-4xl font-medium text-center'>Categories</h1>
            <div className="category">
              <CategoryCard/>
            </div>

          </div>



        </main>

        <Footer/>
        </>
  )
}

export default Home