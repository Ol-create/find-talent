import React, { useState } from "react";


import logo from "../images/logo.webp";
import wp from "../images/wp.webp";

export default function SignUp() {
  

  const handleSeletPerson = (person) => {
    setPerson(person)
  }
  return (
    <div>
      <div>
        <a href="/" className="text-green-700  p-5 block">
          Upwork
        </a>
      </div>
      {/* <div className="flex justify-center"> */}
      <div className="w-full md:w-[50%] mx-auto md:rounded-2xl">
        <h1 className="text-center w-full text-2xl md:text-4xl pt-4 md:py-6 min-h-24 ">
          Join as a client or <br className="sm:hidden" />
          freelancer
        </h1>
        <div className="md:grid grid-cols-2  space-x-0 ml-12">
          <div className={`border-2 border-gray-200 rounded-lg w-[70%] mx-auto h-56 hover:cursor-pointer hover:bg-gray-100 hover:border-green-600 ${person == 'client' ? 'border-green-600 bg-gray-100' : ""}`}
               onClick={() => handleSeletPerson('client')}
               >
            <div className="flex justify-between relative">
              <img src={logo} alt="logo" className="w-4 h-4 m-5 block" />
              <input
                type="radio"
                name="sign-in-type"
                checked={person == 'client'}
                className="form-radio border-2 border-green-600 h-5 w-5 absolute top-2 right-2"
              />
            </div>
            <p className="ml-5 text-2xl font-semibold  pb-16">
              I’m a client, <br/> 
              hiring for a <br/>
              project 
            </p>
          </div>
          <div className={`border-2 border-gray-200 rounded-lg w-[70%] mx-auto h-56 hover:cursor-pointer hover:bg-gray-100 hover:border-green-600 ${person == 'freelancer' ? 'border-green-600 bg-gray-100' : ""}`}
               onClick={() => handleSeletPerson('freelancer')}>
            <div className="flex justify-between relative">
              <img src={wp} alt="logo" className="w-4 h-4 m-5 block" />
              <input
                type="radio"
                name="sign-in-type"
                checked={person == 'freelancer'}
                readOnly
                className="focus:ring focus:ring-green-500 border-2 border-green-600 h-5 w-5 absolute top-2 right-2"
              />
            </div>
            <p className="ml-5 text-2xl font-semibold  pb-16">
              I’m a <br/>
              freelancer, <br/> 
              looking for a <br/>
              project 
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-auto w-[90%] mt-9">
          <button
            type="submit"
            disabled={true}
            className={`rounded-xl py-5 px-6 justify-center text-center font-bold items-center inline-flex  h-9 ${!person ? 'cursor-not-allowed bg-gray-300  text-gray-500' : "bg-green-700 text-white cursor-pointer"}` }
          >
            {person == 'client'? "Join as a Client": person == 'freelancer'? "Apply as a Freelancer": "Create Account"}
          </button>
        </div>
        <div className="flex justify-center mt-2">
          <p>Already have an account?</p>
          <a href="" className="text-green-600 ml-1">
            Log In
          </a>  
        </div>
      </div>
    </div>
  );
}
