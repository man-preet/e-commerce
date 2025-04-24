import React from 'react'
import Product from '../Data/Product'
import ProductCard from '../Components/UI/ProductCard'
import Navbar from '../Components/Navigation/Navbar'
import Footer from '../Components/Navigation/Footer'
const AllProducts = () => {
  return (
    <>
        <Navbar/>
        <div className="AllProducts">
            <ProductCard products={Product}/>
        </div>  
        <Footer/>  
    </>
  )
}

export default AllProducts