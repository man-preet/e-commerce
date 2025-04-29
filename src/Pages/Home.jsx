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
            <button className=' relative my-24 text-lg font-bold bg-blue-500 z-50 p-4 rounded-2xl cursor-pointer'><a href="#offers">Explore Offers</a></button>
            </div>
          </div>

          {/* Categories section */}

          <div className="categories mt-10  w-10/12 mx-auto">
            <h1 className='text-4xl font-medium text-center'>Categories</h1>
            <div className="category">
              <CategoryCard/>
            </div>

          </div>
          {/* Offers section */}

              {/* Offers Section */}
        <div id="offers" className="offers mt-16 w-10/12 mx-auto" >
          <h1 className="text-4xl font-medium text-center mb-8">Exclusive Offers</h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {/* Offer Card 1 */}
            <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/Assets/Images/footwear-offer.jpg" alt="Offer 1" className="h-40 w-full object-cover" />
              <div className="p-4 text-center">
                <h2 className="font-semibold text-lg">50% Off on Shoes</h2>
                <p className="text-gray-600 mt-2">Grab stylish shoes at half price!</p>
              </div>
            </div>

            {/* Offer Card 2 */}
            <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/Assets/Images/electronics-offer.jpg" alt="Offer 2" className="h-40 w-full object-cover" />
              <div className="p-4 text-center">
                <h2 className="font-semibold text-lg">30% Off on Electronics</h2>
                <p className="text-gray-600 mt-2">Top gadgets at discounted rates.</p>
              </div>
            </div>

            {/* Offer Card 3 */}
            <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/Assets/Images/clothes-offer.jpg" alt="Offer 3" className="h-40 w-full object-cover" />
              <div className="p-4 text-center">
                <h2 className="font-semibold text-lg">Buy 1 Get 1 Free</h2>
                <p className="text-gray-600 mt-2">Best deals on fashion wear.</p>
              </div>
            </div>
          </div>
        </div>



        </main>

        <Footer/>
        </>
  )
}

export default Home