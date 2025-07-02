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
      <div className="contact w-11/12 max-w-5xl mx-auto mt-16 min-h-[80vh] flex items-center justify-center px-4">
  <div className="w-full bg-white shadow-lg rounded-lg p-8">
    <h1 className="text-4xl font-semibold text-center text-gray-800">Contact Form</h1>

    <div className="form mt-10 max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="mb-6">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Problem/Message */}
        <div className="mb-6">
          <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
            What's your problem?
          </label>
          <textarea
            name="problem"
            id="problem"
            rows="5"
            placeholder="Describe your issue here..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            {...register("problem", {
              required: "Please describe your issue",
            })}
          ></textarea>
          {errors.problem && (
            <p className="text-sm text-red-500 mt-1">{errors.problem.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <input
            type="submit"
            value="Submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-8 py-2 rounded-3xl cursor-pointer transition duration-300"
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
