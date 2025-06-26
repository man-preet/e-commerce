import React,{useEffect} from "react";
import Product from "../Data/Product";
import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Navigation/Footer";
import { useParams,useNavigate } from "react-router";
import { auth } from "../Firebase/Firebase"; 
import Swal from "sweetalert2";


const ProductDetails = () => {
  const { id } = useParams();
  const navigate=useNavigate();

  const product = Product.find((p) => p.id.toString() === id);

  useEffect(() => {
    if (!product) {
      navigate("/page-not-found"); 
    }
  }, [product, navigate]);

    if(!product)
    {
        return null;

    }



    const handleAddToCart = () =>{
      // const orderData={price:product.price,productName:product.name,image:product.image,brand:product.brand,category:product.category};
      // localStorage.setItem("orderData",JSON.stringify(orderData));


      const user=auth.currentUser;
      if(!user)
        {
          Swal.fire("Please Sign In to see items in the cart");
          navigate("/");
          return;

        }

        const userCartKey=`cart_${user.uid}`;

      const existingCart=JSON.parse(localStorage.getItem(userCartKey)) || [];

      const productToAdd={
        id:product.id,
        price:product.price,
        productName:product.name,
        image:product.image,
        brand:product.brand,
        category:product.category
      };

      const isAlreadyinCart=existingCart.find(item=>item.id===productToAdd.id);
      if(!isAlreadyinCart){
        existingCart.push(productToAdd);
        localStorage.setItem(userCartKey, JSON.stringify(existingCart));
        navigate('/add-to-cart')
      }
      else{
        Swal.fire("This Item is already in cart.");
        
      }
    }

  const handleBuyNow=()=>{



    const user=auth.currentUser;
    if(!user)
      {
        Swal.fire("Please Sign In to buy your product ");
        // navigate("/");
        return;

      }

    const orderData={price:product.price,productName:product.name,image:product.image,brand:product.brand,category:product.category};
    localStorage.setItem("orderData",JSON.stringify(orderData));

    navigate("/address",{state:orderData});

  }

  return (
    <>
      <Navbar />
      <div className="Details mx-auto w-9/12">
        <div key={id} className="text-center mx-auto">
          <img
            src={product.image}
            alt="product details"
            className="w-4/12 h-full object-contain mx-auto"
          />
          <h1 className="text-3xl font-medium">{product.name}</h1>
          <p>by {product.brand}</p>
          <p>{product.category}</p>
          <h2 className="text-xl font-medium">Price: {product.price}</h2>

          <div className="buttons  mx-auto w-60">
            <button
              className="block rounded-3xl px-20 py-2 my-5 bg-orange-400 font-medium cursor-pointer"
              onClick={()=>handleBuyNow()}
            >
              Buy Now
            </button>
            <button className="block rounded-3xl px-18 py-2 bg-yellow-400 font-medium cursor-pointer"
              onClick={()=>handleAddToCart()}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
