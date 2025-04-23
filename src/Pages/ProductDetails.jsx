import React,{useEffect} from "react";
import Product from "../Data/Product";
import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Navigation/Footer";
import { useParams,useNavigate } from "react-router";

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

  const handleBuyNow=()=>{
    navigate("/address",{state:{price:product.price,productName:product.name}});

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
            <button className="block rounded-3xl px-18 py-2 bg-yellow-400 font-medium cursor-pointer">
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
