import React from 'react'
import Categories from '/Users/apple/Documents/Shopping Website/shopease/src/Data/Categories.js';
import { useNavigate } from 'react-router';

const CategoryCard = () => {
  
  const navigate=useNavigate();

  const handleCategoryClick=(CategoryName)=>{
    console.log(encodeURIComponent(CategoryName));
    
    navigate(`/products?category=${encodeURIComponent(CategoryName)}`)
  }

  return (
    <>
        <div className="card flex gap-8 mt-5 flex-wrap w-9/12 mx-auto" >
            {Categories.map((category,index)=>(
                <div key={index} className='text-center '>
                    <img src={category.image} alt={`${category.name}image`} className='w-30 h-40 shadow-md rounded-2xl' />
                    <button className='relative z-50 cursor-pointer mt-2' onClick={()=>handleCategoryClick(category.name)}>{category.name}</button>
                </div>
            ))}
        </div>
    </>
  )
}

export default CategoryCard