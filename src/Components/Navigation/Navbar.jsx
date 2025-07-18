import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {auth } from '../../Firebase/Firebase';
import { onAuthStateChanged ,signOut } from 'firebase/auth';
// import '/Users/apple/Documents/Shopping Website/shopease/src/tailwind.config.js';

const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false);

    const [cartCount,setCartCount]=useState(0);
    const [user,setUser]=useState(null);
    // const [searchText,setSearchText]= useState();
    // const navigate=useNavigate();


  // const handleSearch=(e)=>{
  //   if(e.key==="Enter" && searchText.trim()){
  //     navigate(`/all-products?search=${encodeURIComponent(searchText.trim())}`);
  //     setSearchText("");
  //       }
  // }

    useEffect(()=>{
      const storedItems=JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartCount(storedItems.length);

      const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        
      })
      return ()=>unsubscribe();
    },[]);

   const  handleLogOut=async()=>{
      await signOut(auth);
      setUser(null);

    }
  return (

    <>
        <div className="navbar">
                <div className=' flex justify-between bg-blue-500 h-20 p-4  z-50 shadow-md border-t border-white'>
                    <ul>
                        <li className="text-white text-3xl cursor-text "><Link to="/home">shopease</Link></li>
                    </ul>

                    <div className='md:hidden'>
                        <button onClick={()=>setIsOpen(!isOpen)}  className='text-white text-2xl'>
                            <i className={`bi ${isOpen?'bi-x':'bi-list'}`}></i>
                        </button>
                    </div>
                    <ul className="hidden md:flex justify-center gap-10 p-2 text-white font-bold ">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/all-products">Shop</Link></li>
                        {/* <li><Link to="/order">Orders</Link></li> */}
                        <li><Link to="/about">AboutUs</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                        {/* <li><input type="text" placeholder='Search...' className='outline-none' onChange={(e)=>setSearchText(e.target.value)} onKeyDown={handleSearch}/></li> */}
                    </ul>
                    <ul className="hidden md:flex justify-center gap-6 p-2 text-white font-bold ">
                        {
                          user ? 
                          (
                            <>
                               {/* <li><Link><i className="bi bi-person-circle"></i> Profile</Link></li> */}
                                <li><button onClick={handleLogOut}><i className="bi bi-box-arrow-right"></i> Logout</button></li>
                            </>
                          ):(
                            <li><Link to="/"><i className="bi bi-box-arrow-in-right"></i> Log In</Link></li>
                          )
                        }
                        <li className='relative'>
                          
                          <Link to="/add-to-cart"><i className="bi bi-cart-fill"></i>Cart</Link>
                          {cartCount>0 && (
                            <span className="absolute  right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                              {cartCount}
                            </span>
                          )
                        }
                          
                          </li>

                      
                    </ul>


                </div>

                {isOpen && (
        <div className="md:hidden bg-blue-600 text-white font-bold px-6 py-4 space-y-3 sticky top-0 z-50">
          <Link to="/home" className="block flex gap-2"><i className="bi bi-house-door-fill"></i>Home</Link>
          <Link to="/all-products" className="block flex gap-2"><i className="bi bi-bag-fill"></i>Shop</Link>
          {/* <Link to="/order" className="block flex gap-2"><i className="bi bi-boxes"></i>Orders</Link> */}
          <Link to="/about" className="block flex gap-2"><i className="bi bi-file-person-fill"></i>About Us</Link>
          <Link to="/contactus" className="block flex gap-2"><i className="bi bi-person-lines-fill"></i>Contact</Link>
          {/* <Link to="/" className="block flex gap-2"><i className="bi bi-box-arrow-in-right mr-1"></i>Log In</Link> */}

          {user ? (
              <>
                <Link className="block flex gap-2"><i className="bi bi-person-circle"></i> Profile</Link>
                <button onClick={handleLogOut} className="block flex gap-2"><i className="bi bi-box-arrow-right"></i> Logout</button>
              </>
            ) : (
              <Link to="/" className="block flex gap-2"><i className="bi bi-box-arrow-in-right"></i> Log In</Link>
            )}


          <Link to="/add-to-cart" className="block flex gap-2"><i className="bi bi-cart-fill mr-1"></i>Cart</Link>
        </div>
      )}


        </div>
    </>
  )
}

export default Navbar