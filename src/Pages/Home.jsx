import React from 'react'
import Navbar from '../Components/Navigation/Navbar.jsx'
import Footer from '../Components/Navigation/Footer'
import CategoryCard from '../Components/UI/CategoryCard.jsx';



const Home = () => {
  return (
        <>
        <Navbar/>

        <main className="mt-1">
  {/* Hero Section */}
  <section className="hero-content">
    <div className="relative bg-[url('/Assets/Images/background-image.jpg')] bg-center bg-cover h-[28rem] text-white text-center flex flex-col items-center justify-center shadow-md bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent z-10" />
      <h1 className="relative z-20 text-4xl md:text-5xl font-bold">"Shop Smart, Live Stylishly."</h1>
      <p className="relative z-20 mt-4 text-lg md:text-xl">Make informed purchases to enhance your personal style...</p>
      <a
        href="#offers"
        className="relative z-20 mt-8 text-lg font-semibold bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-2xl transition duration-300"
      >
        Explore Offers
      </a>
    </div>
  </section>

  {/* Categories Section */}
  <section className="categories mt-16 w-11/12 max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-semibold text-center text-gray-800">Categories</h2>
    <div className="category mt-10">
      <CategoryCard />
    </div>
  </section>

  {/* Offers Section */}
  <section id="offers" className="offers mt-20 w-11/12 max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">Exclusive Offers</h2>
    <div className="flex flex-wrap gap-8 justify-center">
      {/* Offer Card 1 */}
      <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
        <img src="/Assets/Images/footwear-offer.jpg" alt="Offer 1" className="h-40 w-full object-cover" />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg">50% Off on Shoes</h3>
          <p className="text-gray-600 mt-2 text-sm">Grab stylish shoes at half price!</p>
        </div>
      </div>

      {/* Offer Card 2 */}
      <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
        <img src="/Assets/Images/electronics-offer.jpg" alt="Offer 2" className="h-40 w-full object-cover" />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg">30% Off on Electronics</h3>
          <p className="text-gray-600 mt-2 text-sm">Top gadgets at discounted rates.</p>
        </div>
      </div>

      {/* Offer Card 3 */}
      <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
        <img src="/Assets/Images/clothes-offer.jpg" alt="Offer 3" className="h-40 w-full object-cover" />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg">Buy 1 Get 1 Free</h3>
          <p className="text-gray-600 mt-2 text-sm">Best deals on fashion wear.</p>
        </div>
      </div>
    </div>
  </section>
</main>

        <Footer/>
        </>
  )
}

export default Home