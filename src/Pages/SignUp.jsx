import React ,{useState}from "react";
import db, {auth} from '../Firebase/Firebase.js'
import {doc,setDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";


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
                alert("Email is already registered");
            }
            else{
                console.log("Error Message",e);
               
            }

        }

    }


  return (
    <>
      <div className="signup-body h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium mb-5">SignUp</h1>
        <div className="signup-form pt-5">
          <form action="" onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={userFormData.name}
                placeholder="Enter Your Name"
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
            </div>
            {errors.name&& <p className="text-red-500 text-sm">{errors.name}</p>}
            <br />
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={userFormData.email}
                placeholder="Enter Your email"
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
            </div>
            {errors.email&& <p className="text-red-500 text-sm">{errors.email}</p>}
            <br />
            <div className="gender">
              <label htmlFor="gender">Gender:</label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={userFormData.gender === "male"}
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
              Male
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={userFormData.gender==="female"}
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
              female
            </div>
            {errors.gender&& <p className="text-red-500 text-sm">{errors.gender}</p>}
            <br />
            <div className="house">
              <label htmlFor="house">House/Building:</label>
              <input
                type="text"
                name="house"
                id="house"
                value={userFormData.house}
                placeholder="Enter Your House no./Building"
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
            </div>
            {errors.house&& <p className="text-red-500 text-sm">{errors.house}</p>}
            <br />
            <div className="street">
              <label htmlFor="street">Street/NearBy:</label>
              <input
                type="text"
                name="street"
                id="street"
                value={userFormData.street}
                placeholder="Enter Your Street/NearBy"
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
            </div>
            {errors.street&& <p className="text-red-500 text-sm">{errors.street}</p>}
            <br />
            <div className="state">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                name="state"
                id="state"
                value={userFormData.state}
                placeholder="Enter Your State"
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
            </div>
            {errors.state&& <p className="text-red-500 text-sm">{errors.state}</p>}
            <br />
            <div className="city">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                name="city"
                id="city"
                value={userFormData.city}
                placeholder="Enter Your City"
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
            </div>
            {errors.city&& <p className="text-red-500 text-sm">{errors.city}</p>}
            <br />

            <div className="pincode">
              <label htmlFor="pincode">Pincode:</label>
              <input
                type="text"
                name="pincode"
                id="pincode"
                value={userFormData.pincode}
                placeholder="Enter Your Pincode"
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
            </div>
            {errors.pincode&& <p className="text-red-500 text-sm">{errors.pincode}</p>}
            <br />
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={userFormData.password}
                placeholder="Enter Your Password"
                className="border rounded p-2 focus:outline-none"
                onChange={handleChange}
                autoComplete="none"
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            <br />
            <div className="submit">
              <input type="submit" value="Sign Up" className="rounded px-27 py-1 bg-yellow-500" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
