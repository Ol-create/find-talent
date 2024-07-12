import React from 'react'

export default function Register() {
  return (
    <div className='mx-auto'>
    <h2>Sign up to find work you love</h2>
    <div><button>Continue withApple</button> <button>Continue with Google</button></div>
    <div class="flex items-center justify-center my-4">
    <div class="flex-grow border-t border-gray-300"></div>
    <span class="px-4 text-gray-700">or</span>
    <div class="flex-grow border-t border-gray-300"></div>
  </div>
  <div className='flex'>
  <div ><label htmlFor="firstName">First name</label> <br />
  <input type="text" className='border border-gray-200' /></div>
  <div><label htmlFor="lastName">Last name</label> <br />
    <input type="text" className='border border-gray-200' /></div>
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
  )
}
