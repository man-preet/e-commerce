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

        <div className="productCard mx-auto w-8/12 mt-20">
            {products.map((product)=>(
                <div key={product.id} className='md:flex gap-6 mt-1 border-b-1 p-4'>
                    <img src={product.image} alt="Product" className='md:h-64 w-60 object-contain'/>
                    <div>
                        <h1 className='font-bold text-xl'>{product.name}</h1>
                        <p>by {product.brand}</p>
                        <p>{product.category}</p>
                        <h2 className='font-bold text-lg'>price:{product.price}</h2>

                        <div className="buttons flex gap-6 mt-5">
                            <button className='px-4 py-2 border rounded-4xl bg-yellow-300 font-medium cursor-pointer'onClick={()=>handleDetail(product.id)} >View Details</button>
                            {/* <button className='px-4 py-2 border rounded-4xl bg-yellow-300 font-medium'>Add to Cart</button> */}
                        </div>
                    </div>
                </div>
            ))
            
            
            }
        </div>
    </>
  )
}

export default ProductCard