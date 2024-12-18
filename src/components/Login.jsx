import React from 'react'
import apple from "../images/apple-logo.png";
import google from "../images/google-icon.png";
import visible_off from "../images/visibility_off.png"

export default function Login() {
  return (
    <div>
      <div className="flex justify-between">
        <a href="/" className="text-green-700  p-5 block">
          Upwork
        </a>
        <div className="pr-5 pt-2 space-x-4 flex">
          <a href="/log-in" className="pt-5 lg:hidden text-green-700">
            Log in
          </a>
        </div>
      </div>
      <div className="border lg:w-[40%] px-10 min-h-fit mx-auto py-10">
        <h1 className="text-4xl text-center">Log in to Upwork</h1>
        <div className='border-2 mt-6'>
          <input type="text"  className='border outline-none'placeholder='Username or Email'/>
          </div>
          <button className='rounded-md bg-green-600 w-full py-2'>Continue</button>
        <div className="border min-h-10 my-3 mx-7 rounded-full border-gray-400 flex justify-center items-center">
          <img src={apple} alt="apple logo" className="w-12 h-auto mr-3" />
          <p>Continue with Apple</p>
        </div>
        <div className="border text-white bg-blue-400 min-h-10 my-3 mx-7 rounded-full h-10 border-gray-400 relative flex justify-center items-center">
          <img
            src={google}
            alt="google logo"
            className="w-9 h-9 ml-[3px] absolute left-0 rounded-full"
          />
          <p>Continue with Google</p>
        </div>
        <div className="m-6 flex  justify-center items-center">
          <hr className="my-4 border-t-2 w-[45%] border-gray-300 block" />
          <p className="mx-2">or</p>
          <hr className="my-4 border-t-2 w-[45%] border-gray-300 block" />
        </div>
        
        <div className="m-6 flex  justify-center items-center my-28">
          <hr className="my-4 border-t-2 w-16 border-gray-300 block" />
          <p className="mx-2">Don't have an Upwork account?</p>
          <hr className="my-4 border-t-2 w-16 border-gray-300 block" />
        </div>

        {/* Email address input */}
        <input
          type="text"
          placeholder="Work email address"
          className=" block border border-gray-200 focus:outline-gray-300 rounded-lg w-[92%] mx-auto mb-4 h-9 pl-5"
        />

        {/* Password input */}
        <div className='flex'>
          <input
            type="text"
            placeholder="Password (8 0r more characters)"
            className=" block border border-gray-200 focus:outline-gray-300 rounded-lg w-[92%] mx-auto mb-4 h-9 pl-5"
          />
          <img src={visible_off} alt="visibility_off" />
        </div>
      </div>
    </div>
  );
}
