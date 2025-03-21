"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter(); // Initialize useRouter

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        
        // Store success message in local storage
        localStorage.setItem("loginMessage", "Login successful! Welcome back.");

        // Redirect to home page
        router.push("/");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <section className="text-gray-600 body-font relative bg-[#edf5ff] h-[100vh]">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col w-[40%] mb-12 mx-auto bg-white px-10 py-20">
          <h1 className="pb-5 text-center text-black">Login Form</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Your password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-6">
              <h3>
                Don't have an Account?{" "}
                <span className="text-blue-900">
                  <Link href="/signup">Sign Up</Link>
                </span>
              </h3>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;