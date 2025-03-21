"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve login success message
    const loginMessage = localStorage.getItem("loginMessage");
    if (loginMessage) {
      setMessage(loginMessage);
      localStorage.removeItem("loginMessage"); // Clear message after displaying
    }
  }, []);

  return (
    <div className="container mx-auto text-center mt-10">
      {message && (
        <div className="bg-green-500 text-white p-3 rounded-lg mb-4">
          {message}
        </div>
      )}
      <h1 className="text-3xl font-bold">Welcome to Home</h1>
    </div>
  );
};

export default Home;
