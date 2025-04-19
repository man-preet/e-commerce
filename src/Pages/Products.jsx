import React from 'react'
import Navbar from '../Components/Navigation/Navbar'
import Footer from '../Components/Navigation/Footer'
import ProductCard from '../Components/UI/ProductCard'
import { useLocation } from 'react-router-dom'
import Product from '../Data/Product'

const Products = () => {

  const location=useLocation();

  const queryParams=new URLSearchParams(location.search);
  const selectedCategory=queryParams.get('category');
  

  console.log(selectedCategory);


  const filteredProducts=selectedCategory?Product.filter((product)=>product.category===selectedCategory):Product;
  console.log(filteredProducts);

  return (
        <>
            <Navbar/>
            <div className='product p-4'>
              <h1 className='text-3xl font-semibold mb-4 text-center'>
                {selectedCategory?`Products of ${selectedCategory}`:'All Products'}
              </h1>


              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                
                      <ProductCard products={filteredProducts}/>
              </div>
            </div>
            <Footer/>
        </>
  )
}

export default Products
