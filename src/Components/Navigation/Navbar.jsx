import React, {useState} from 'react'
// import '/Users/apple/Documents/Shopping Website/shopease/src/tailwind.config.js';

const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false);
  return (

    <>
        <div className="navbar">
                <div className=' flex justify-between bg-blue-500 h-20 p-4 sticky top-0 z-50 shadow-md border-t border-white'>
                    <ul>
                        <li className="text-white text-3xl cursor-text "><a href="/">shopease</a></li>
                    </ul>

                    <div className='md:hidden'>
                        <button onClick={()=>setIsOpen(!isOpen)}  className='text-white text-2xl'>
                            <i className={`bi ${isOpen?'bi-x':'bi-list'}`}></i>
                        </button>
                    </div>
                    <ul className="hidden md:flex justify-center gap-10 p-2 text-white font-bold ">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">Orders</a></li>
                        <li><a href="/">AboutUs</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><input type="text" placeholder='Search...' className='outline-none'/></li>
                    </ul>
                    <ul className="hidden md:flex justify-center gap-6 p-2 text-white font-bold ">
                        <li><a href="/"><i className="bi bi-box-arrow-in-right"></i>Log In</a></li>
                        <li><a href="/"><i className="bi bi-cart-fill"></i>Cart</a></li>
                    </ul>

                </div>

                {isOpen && (
        <div className="md:hidden bg-blue-600 text-white font-bold px-6 py-4 space-y-3 sticky top-0 z-50">
          <a href="/" className="block flex gap-2"><i className="bi bi-house-door-fill"></i>Home</a>
          <a href="/" className="block flex gap-2"><i className="bi bi-bag-fill"></i>Shop</a>
          <a href="/" className="block flex gap-2"><i className="bi bi-boxes"></i>Orders</a>
          <a href="/" className="block flex gap-2"><i className="bi bi-file-person-fill"></i>About Us</a>
          <a href="/" className="block flex gap-2"><i className="bi bi-person-lines-fill"></i>Contact</a>
          <a href="/" className="block flex gap-2"><i className="bi bi-box-arrow-in-right mr-1"></i>Log In</a>
          <a href="/" className="block flex gap-2"><i className="bi bi-cart-fill mr-1"></i>Cart</a>
        </div>
      )}


        </div>
    </>
  )
}

export default Navbar