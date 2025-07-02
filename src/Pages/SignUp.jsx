import React ,{useState}from "react";
import db, {auth} from '../Firebase/Firebase.js'
import {doc,setDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {

    const navigate=useNavigate();

    const [userFormData,setUserFormData]=useState({
        name:'',
        email:'',
        gender:'',
        house:'',
        street:'',
        state:'',
        city:'',
        pincode:'',
        password:''
    })
 
    const [errors,setErrors]=useState({});
    // const [isSubmitted,setIsSubmitted]= useState(false);


    const validation=()=>{
      let newErrors={};

      if(!userFormData.name.trim()){newErrors.name="Name is required"};
      if(!userFormData.email.trim()){newErrors.email="Email is required"}
      else if(!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(userFormData.email)){newErrors.email="Invalid Email"}
      if(!userFormData.gender.trim()){newErrors.gender="Gender is required"};
      if(!userFormData.house.trim()){newErrors.house="House no./ Building is required"};
      if(!userFormData.street.trim()){newErrors.street="Street/NearBy is required"};
      if(!userFormData.state.trim()){newErrors.state="State is required"};
      if(!userFormData.city.trim()){newErrors.city="City is required"};
      if(!userFormData.pincode.trim()){newErrors.pincode="Pincode is required"};
      if(!userFormData.password.trim()){newErrors.password="Password is required"}
      else if(userFormData.password.length<6){newErrors.password="Password's length must be greater than or equal to 6 "}
      else if(!/[A-Za-z]/.test(userFormData.password)){newErrors.password="Password must contain an Alphabetic character"}
      else if(!/[!@#$%^&*(),.?":{}|<>]/.test(userFormData.password)){newErrors.password="Password must contain a special character"}
      else if(!/[0-9]/.test(userFormData.password)){newErrors.password="Password must contain a numeric"}
      return newErrors;
    
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;

        setUserFormData((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit=async(e)=>{
        try{
            e.preventDefault();
            // setIsSubmitted(true);
            const validate=validation();
            setErrors(validate);

            if (Object.keys(validate).length > 0) {
              // ❗ Don't proceed if there are validation errors
              return;

            }
            let {email,password, ...otherDetails}=userFormData;


            const userCredentials=await createUserWithEmailAndPassword(auth,email,password);
            const user=userCredentials.user;

            await setDoc(doc(db,"users",user.uid),{
                email,
                password,
                ...otherDetails,
            })
            setUserFormData({
                name:'',
                email:'',
                gender:'',
                house:'',
                street:'',
                state:'',
                city:'',
                pincode:'',
                password:''
            })

            navigate("/home");


        }
        catch(e)
        {
            if(e.code=== "auth/email-already-in-use"){
              Swal.fire({
                text: "Email is already registered",
                showConfirmButton:false,
                timer:1500
              });
            }
            else{
                console.log("Error Message",e);
               
            }

        }

    }


  return (
    <>
      <div className="signup-body min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl font-semibold mb-8 text-gray-800">Sign Up</h1>
      <div className="signup-form bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={userFormData.name}
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={userFormData.email}
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender:</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={userFormData.gender === "male"}
                  onChange={handleChange}
                  className="accent-yellow-500"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={userFormData.gender === "female"}
                  onChange={handleChange}
                  className="accent-yellow-500"
                />
                <span>Female</span>
              </label>
            </div>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          </div>

          {/* House */}
          <div className="mb-4">
            <label htmlFor="house" className="block text-sm font-medium text-gray-700 mb-1">
              House/Building:
            </label>
            <input
              type="text"
              name="house"
              id="house"
              value={userFormData.house}
              placeholder="Enter Your House no./Building"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.house && <p className="text-red-500 text-sm mt-1">{errors.house}</p>}
          </div>

          {/* Street */}
          <div className="mb-4">
            <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
              Street/NearBy:
            </label>
            <input
              type="text"
              name="street"
              id="street"
              value={userFormData.street}
              placeholder="Enter Your Street/NearBy"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
          </div>

          {/* State */}
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
              State:
            </label>
            <input
              type="text"
              name="state"
              id="state"
              value={userFormData.state}
              placeholder="Enter Your State"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
          </div>

          {/* City */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City:
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={userFormData.city}
              placeholder="Enter Your City"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>

          {/* Pincode */}
          <div className="mb-4">
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
              Pincode:
            </label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              value={userFormData.pincode}
              placeholder="Enter Your Pincode"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={userFormData.password}
              placeholder="Enter Your Password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Submit */}
          <div className="mt-6">
            <input
              type="submit"
              value="Sign Up"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded cursor-pointer transition duration-300"
            />
          </div>

          {/* Already have account */}
          <p className="text-sm mt-4 text-center">
            Already have an account?
            <Link to="/" className="text-yellow-600 font-medium hover:underline ml-1">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUp;
