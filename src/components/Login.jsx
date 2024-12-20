import React from 'react'
import { Link } from 'react-router-dom';
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
      <div className="border lg:w-[40%] px-20 min-h-fit mx-auto py-10 rounded-xl my-7">
        <h1 className="text-4xl text-center">Log in to Upwork</h1>
        <div className='border-2 mt-6 rounded-[10px] flex'>
        <img src={apple} alt="apple logo" className="w-12 h-auto" />
          <input type="text"  className='border outline-none w-full border-none 'placeholder='Username or Email '/>
          </div>
          <button className='text-white rounded-[10px] bg-green-700 w-full py-2 mt-6 font-semibold'>Continue</button>

          <div className="my-6 flex  justify-center items-center">
          <hr className="my-4 border-t-2 w-[45%] border-gray-300 block" />
          <p className="mx-2">or</p>
          <hr className="my-4 border-t-2 w-[45%] border-gray-300 block" />
          </div>

        <div className="border min-h-10 my-3 rounded-full border-gray-400 flex justify-center items-center">
          <img src={apple} alt="apple logo" className="w-12 h-auto mr-1" />
          <p>Continue with Apple</p>
        </div>

        <div className="border text-white bg-blue-500 min-h-10 my-3 rounded-[10px] h-10 border-gray-400 relative flex justify-center items-center mt-5">
          <img
            src={google}
            alt="google logo"
            className="w-9 h-9 ml-[3px] absolute left-0 rounded-[10px] bg-gray-200 "
          />
          <p>Continue with Google</p>
        </div>
        
        
          <div className=" flex w-full justify-center items-center mt-28">
          <hr className="my-4 border-t-2 w-10 border-gray-300 block" />
          <p className="mx-2 text-gray-300">Don't have an Upwork account?</p>
          <hr className='my-4 border-t-2 w-10 border-gray-300 block' />
          </div>
      
      <Link to="/signup">
      <p className='border-green-700 mx-auto rounded-[10px] p-2 text-green-700 font-semibold text-center w-56 mt-4 border-2 cursor-pointer hover:bg-gray-100'>Sign Up</p>
      </Link>
    </div>
    </div>
  );
}
