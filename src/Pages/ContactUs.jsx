import React from "react";
import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Navigation/Footer";
import db from "../Firebase/Firebase";
import { useForm } from "react-hook-form";
import { collection,addDoc } from "firebase/firestore";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
        try{
            await addDoc(collection(db,"contactForms"),data);
            console.log("Form submitted Successfully", data);
            reset();

        }
        catch(e)
        {
            console.log("Error message:",e);
            
        }
  };



  return (
    <>
      <Navbar />
      <div className="contact w-10/12 flex justify-center mx-auto mt-10 h-180 items-center ">
        <div className=" w-10/12 mx-auto ">
          <h1 className="text-3xl font-medium  text-center"> Contact-Form </h1>
          <div className="form mt-10 w-7/12 mx-auto flex flex-column items-center justify-center">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="email mb-5 ">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="Email"
                  className="border rounded p-2 focus:outline-none"
                  autoComplete="off"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Your email is not correct",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-300">{errors.email.message}</p>
                )}
              </div>

              <div className="problem mb-5">
                <label htmlFor="problem">What's your Problem?</label>
                <br />
                <textarea
                  name="problem"
                  id="problem"
                  rows="5"
                  column="3"
                  placeholder="You Can Say Here..."
                  className="focus:outline-none  border rounded px-2"
                  {...register("problem", {
                    required: "Please describe your issue",
                    })}
                ></textarea>
                {errors.problem && (
                  <p className="text-sm text-red-300">
                    {errors.problem.message}
                  </p>
                )}
              </div>
              <div className="submit">
                <input
                  type="submit"
                  className=" rounded-3xl px-17 py-1 bg-yellow-400 cursor-pointer focus:outline-none"
                  //   value="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
