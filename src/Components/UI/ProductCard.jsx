import React from 'react'
import { useNavigate } from 'react-router';
// import Product from '../../Data/Product'
const ProductCard = ({products=[]}) => {

    console.log(products)

    const navigate=useNavigate();


    const handleDetail=(id)=>{
            console.log(id);

            navigate(`/products/${encodeURIComponent(id)}`);

    }
  return (
    <>

<div className="productCard mx-auto w-11/12 md:w-8/12 mt-20">
  {products.map((product) => (
    <div
      key={product.id}
      className="md:flex items-center gap-6 mb-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
    >
      <img
        src={product.image}
        alt="Product"
        className="h-48 md:h-64 w-full md:w-60 object-contain rounded-md"
      />

      <div className="mt-4 md:mt-0 flex-1">
        <h1 className="font-semibold text-xl text-gray-800">{product.name}</h1>
        <p className="text-sm text-gray-500 mt-1">by {product.brand}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
        <h2 className="font-bold text-lg text-gray-900 mt-2">Price: ₹{product.price}</h2>

        <div className="buttons flex gap-4 mt-5">
          <button
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-lg transition-colors"
            onClick={() => handleDetail(product.id)}
          >
            View Details
          </button>
          {/* 
          <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-lg transition-colors">
            Add to Cart
          </button> 
          */}
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  )
}

export default ProductCard