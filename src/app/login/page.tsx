import { Loader2 } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="w-full h-screen flex-col flex justify-center items-center">
      <h1 className="text-4xl text-black tracking-tighter font-bold">
        Login to your account
      </h1>
      <form className="w-3/12">
        <div className="my-4">
          <label htmlFor="email" className="py-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="text-black px-3 w-full h-12 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
        <div className="my-4">
          <label htmlFor="password" className="py-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="text-black px-3 w-full h-12 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
        <button className="border-none h-12 mb-3 rounded-md justify-center flex items-center text-white bg-indigo-600 hover:bg-indigo-500 transition duration-200 shadow-lg shadow-indigo-600/35 w-full">
          Sign in
          {/* <Loader2 className="w-5 h-5 ml-3 animate-spin" /> */}
        </button>
        <button className="border-none h-12 rounded-md justify-center flex items-center text-white bg-purple-600 hover:bg-purple-500 transition duration-200 shadow-lg shadow-purple-600/35 w-full">
          Sign up
          {/* <Loader2 className="w-5 h-5 ml-3 animate-spin" /> */}
        </button>
      </form>
    </div>
  );
}
