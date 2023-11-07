import React from "react";
import logo from "../images/logo.webp";
import wp from "../images/wp.webp";

export default function SignUp() {
  return (
    <div>
      <div>
        <a href="/" className="text-green-700  p-5 block">
          Upwork
        </a>
      </div>
      {/* <div className="flex justify-center"> */}
      <div className="w-full md:w-[65%]  mx-auto md:rounded-2xl border border-gray-700">
        <h1 className="text-center w-full text-2xl md:text-4xl pt-4 md:py-6 min-h-24 ">
          Join as a client or <br className="sm:hidden" />
          freelancer
        </h1>
        <div className="md:grid grid-cols-2  space-y-4">
          <div className="border border-gray-400 rounded-lg w-[70%] mx-auto min-h-32">
            <div className="flex justify-between relative">
              <img src={logo} alt="logo" className="w-12 h-10 m-5 block" />
              <input
                type="radio"
                name="sign-in-type"
                className="form-radio border-2 border-green-600 h-5 w-5 absolute top-2 right-2"
              />
            </div>
            <p className="pl-2 text-lg min-h-max">
              I’m a client, hiring for a project 
            </p>
          </div>
          <div className="border border-gray-400 rounded-lg w-[70%] mx-auto min-h-32">
            <div className="flex justify-between relative">
              <img src={wp} alt="logo" className="w-12 h-10 m-5 block" />
              <input
                type="radio"
                name="sign-in-type"
                className="form-radio border-2 border-green-600 h-5 w-5 absolute top-2 right-2"
              />
            </div>
            <p className="pl-2 mb-2 text-lg">
              I’m a freelancer, looking for work
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-auto w-[90%] my-9">
          <button
            type="submit"
            disabled={true}
            className="rounded-full bg-gray-300 cursor-not-allowed text-gray-500 w-full md:w-[60%] h-9"
          >
            Create Account
          </button>
        </div>
        <div className="flex justify-center my-4">
          <p>Already have an account?</p>
          <a href="" className="text-green-600 ml-1">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}
