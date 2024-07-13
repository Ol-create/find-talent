import React from 'react'
import { Apple, Google } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import googleIcon from "../images/googleIcon.png"
import appleIcon from "../images/apple-logo.png"

export default function Register() {
  return (
    <div>
      <div className='flex justify-between p-6'>
        <a href="/" className="text-green-600 font-bold text-2xl block">
          Upwork
        </a>
        <div className='space-x-7 mr-9'><span>Here to hire talent?</span><span className=' text-green-700 cursor-pointer'>Join as a Client</span></div>
      </div>
    <div className='flex justify-center'>
      <div>
      <h2 className='text-4xl font-medium mb-7'>Sign up to find work you love</h2>
    <div className='flex justify-center items-center space-x-6 '>
    <button className="border rounded-xl w-56 h-10 border-gray-700 flex-inline items-center justify-center">
    <img src={appleIcon} alt="apple icon"  className='h-7 inline'/>
        <span>Continue with Apple</span>
      </button>
      <button className="border rounded-xl h-10 bg-blue-500 w-56 border-gray-700 inline-flex items-center justify-between">
        <img src={googleIcon} alt="google icon"  className='h-9 w-9 ml-[1px] my-[1px] border-0 rounded-xl'/>
        <span className='pr-4 text-white'>Continue with Google</span>
      </button>
     </div>
    <div class="flex items-center justify-center my-4">
    <div class="flex-grow border-t border-gray-300"></div>
    <span class="px-4 text-gray-700">or</span>
    <div class="flex-grow border-t border-gray-300"></div>
  </div>
  <div className='flex space-x-6'>
  <div className='w-full'><label htmlFor="firstName" className=' font-semibold'>First name</label> <br />
  <input type="text" className='border-2 w-full rounded-md h-9 hover:border-gray-300 focus:border-gray-400 outline-none' />
  </div>
  <div className='w-full'><label htmlFor="lastName" className=' font-semibold'>Last name</label> <br />
    <input type="text" className='border-2 w-full rounded-md h-9 hover:border-gray-300 focus:border-gray-400 outline-none' />
    </div>
  </div>
  <div>
    <label htmlFor="email">Email</label> <br />
    <input type="email" className='border border-gray-200'/>
  </div>
  <div>
    <label htmlFor="password">Password</label> <br />
    <input type="password" className='border border-gray-200' />
  </div>
  <p>Country</p>
  <div className='border border-gray-200'>Nigeria</div>
  <div>
  <input type="checkbox" class="form-checkbox h-5 w-5 text-green-600" /> <span>Send me helpful emails to find rewarding work and job leads.</span>
  </div>
   <input type="checkbox"  /> <span>
   Yes, I understand and agree to the Upwork Terms of Service ,<br/> including the User Agreement and Privacy Policy .

   </span>
      </div>
    </div>
   
    </div>
  )
}
