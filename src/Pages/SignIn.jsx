
import React, { useState } from 'react'
import {auth}from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



 const SignIn = () => {
  const navigate=useNavigate();

  const [signInFormData,setSignInFormData]=useState({
    email:'',
    password:''
  });

  const [error,setError]=useState({});


  const validationForm=()=>{
     let newErrors={};
    
     if(!signInFormData.email.trim()){newErrors.email="Email is required"}
     else if(!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(signInFormData.email)){newErrors.email="Invalid Email"}

     if(!signInFormData.password.trim()){newErrors.password="Password is required"}
      else if(signInFormData.password.length<6){newErrors.password="Password's length must be greater than or equal to 6 "}
      else if(!/[A-Za-z]/.test(signInFormData.password)){newErrors.password="Password must contain an Alphabetic character"}
      else if(!/[!@#$%^&*(),.?":{}|<>]/.test(signInFormData.password)){newErrors.password="Password must contain a special character"}
      else if(!/[0-9]/.test(signInFormData.password)){newErrors.password="Password must contain a numeric"}
      return newErrors;
    


  }





   const handleChange=(e)=>{
      const {name,value}= e.target;
      setSignInFormData((prev)=>({...prev,[name]:value}))
   }
   const handleSubmit= async(e)=>{
    

      try{
        e.preventDefault();
        const validate=validationForm();
        setError(validate);


        if (Object.keys(validate).length > 0) {
          // ❗ stop submitting
          return;
        }
        const {email,password}= signInFormData;

      
        const userCredentials= await signInWithEmailAndPassword(auth,email,password);
        const user=userCredentials.user;
        console.log(user);

        Swal.fire({
          title: "Successfully Signed In",
          icon: "success",
          draggable: true,
          showConfirmButton:false,
          timer:1000
        });

        navigate("/home");
        setSignInFormData({
          email:"",
          password:""
        })


      }
      catch(e){
        if(e.code==="auth/user-not-found")
          {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No User Found!",
              showConfirmButton:false,
              timer:1500
            });
          }
          else if(e.code === "auth/wrong-password")
            {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Incorrect Password",
                showConfirmButton:false,
                timer:1500
              });

            }
          
            else{
              console.log(e.message);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong,Please try again",
                showConfirmButton:false,
                timer:1500
              });
            }
      }
   }

   return (
    <>
   <div className="signin min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl font-semibold mb-8 text-gray-800">Sign In</h1>

      <div className="signup-form bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={signInFormData.email}
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleChange}
              autoComplete="off"
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
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
              value={signInFormData.password}
              placeholder="Enter Your Password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleChange}
              autoComplete="off"
            />
            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <input
              type="submit"
              value="Sign In"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded cursor-pointer transition duration-300"
            />
          </div>

          {/* Sign Up Redirect */}
          <p className="text-sm mt-4 text-center">
            Don’t have an account?
            <Link to="/signup" className="text-yellow-600 font-medium hover:underline ml-1">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
    </>
   )
 }
 
 export default SignIn 