"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>(""); // State for error message
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("/api/signup", { name, email, password });

      if (response.status === 201) {
        console.log("Signup successful:", response.data);
        setErrorMessage(""); // Clear any previous errors
        router.push("/login"); // Redirect to login page
      }
    } catch (err: any) {
      if (err.response && err.response.status === 400) {
        setErrorMessage("User with this email already exists."); // Show error message
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  // Clear the error message when the user starts typing
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
    setErrorMessage(""); // Clear error message on input change
  };

  return (
    <section className="text-gray-600 body-font relative bg-[#edf5ff] h-[100vh]"> 
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col w-[40%] mb-12 mx-auto bg-white px-10 py-20">
          <h1 className="pb-5 text-center text-black">Signup Form</h1>
          
          {errorMessage && ( // Show error message if it exists
            <div className="mb-4 text-red-600 text-center font-semibold">
              {errorMessage}
            </div>
          )}

          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
              <input type="text" id="name" 
                value={name}
                onChange={handleInputChange(setName)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Your Name" required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" 
                value={email}
                onChange={handleInputChange(setEmail)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Your Email" required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
              <input type="password" id="password" 
                value={password}
                onChange={handleInputChange(setPassword)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required 
              />
            </div>
            <div className="mb-6">
              <h3>Already have an Account? 
                <span className="text-blue-900">
                  <Link href="/login"> Login</Link>
                </span>
              </h3>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
