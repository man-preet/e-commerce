
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
          timer:1500
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
    <div className="signin h-screen flex flex-col items-center justify-center">
    <h1 className="text-3xl font-medium mb-5">Sign In</h1>
        <div className="signup-form pt-5">
          <form action="" onSubmit={handleSubmit}>

            <div className="email">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={signInFormData.email}
                placeholder="Enter Your email"
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
            </div>
            {error.email && <p className='text-red-500 text-sm'>{error.email}</p>}
            <br />
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={signInFormData.password}
                placeholder="Enter Your Password"
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
            </div>
            {error.password && <p className='text-red-500 text-sm'>{error.password}</p>}
            
            <br />
            <p>If you don't have an account? <Link to="/signup" className='text-blue-400'>SignUp</Link></p>
            <div className="submit">
              <input type="submit" value="Sign In" className="rounded px-27 py-1 bg-yellow-500" />
            </div>
          </form>
        </div>
    </div>
    </>
   )
 }
 
 export default SignIn 