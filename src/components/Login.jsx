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
          <p className="hidden lg:block">Looking for work?</p>
          <a href="/" className="text-green-700 hidden lg:block">
            Apply as talent
          </a>
          <a href="" className="pt-5 lg:hidden text-green-700">
            Log in
          </a>
        </div>
      </div>
      <div className="border border-red-400 w-[60%] min-h-fit mx-auto">
        <h1 className="text-4xl text-center">Sign up to hire talent</h1>
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
        {/*  START: Name fields (first & last) */}
        <div className="mb-4 lg:space-x-4 mx-6 lg:mx-0 space-y-4 lg:space-y-0 lg:flex justify-center  items-center bg-red-500">
          <input
            type="text"
            placeholder="First name"
            className="block border border-gray-200 focus:outline-gray-300 rounded-lg w-full lg:w-[45%] h-9 pl-5"
          />
          <input
            type="text"
            placeholder="Last name"
            className=" block border border-gray-200 focus:outline-gray-300 rounded-lg w-full lg:w-[45%] h-9 pl-5"
          />
        </div>
        {/* END: Name fields (first & last) */}

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
