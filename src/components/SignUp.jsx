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
      <div className="w-full h-99 bg-gray-200 border border-gray-700 ">
        <h1 className="mx-auto w-1/2">Join as a client or freelancer</h1>
        <div className="border border-gray-400 rounded-lg w-[90%] mx-auto h-32 mb-6">
          <div className="flex justify-between ">
            <img src={logo} alt="logo" className="w-12 h-10 m-5 block" />
            <div className="m-2 border-2 border-gray-400 h-5 w-5 rounded-full flex justify-center items-center">
              <div className="rounded-full bg-red-600 h-3 w-3"></div>
            </div>
          </div>
          <p className="pl-2 text-lg">I’m a client, hiring for a project</p>
        </div>
        <div className="border border-gray-400 rounded-lg w-[90%] mx-auto h-32">
          <div className="flex justify-between ">
            <img src={wp} alt="logo" className="w-12 h-10 m-5 block" />
            <div className="m-2 border-2 border-gray-400 h-5 w-5 rounded-full flex justify-center items-center">
              <div className="rounded-full bg-red-600 h-3 w-3"></div>
            </div>
          </div>
          <p className="pl-2 text-lg">I’m a freelancer, looking for work</p>
        </div>
        <div className="w-[90%] mx-auto mt-9">
          <button type="submit" disabled={true} className="rounded-lg bg-gray-300 cursor-not-allowed text-gray-500 w-full h-9">
            Create Account
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
