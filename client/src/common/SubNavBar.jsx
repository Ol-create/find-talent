import React from 'react'

const SubNavBar = () => {
  return (
    <div>
        <ul className='flex space-x-6 fixed top-16 p-4 z-10 bg-white w-full '>
            <li className='cursor-pointer hover:text-green-600 hover:underline'>Development & IT</li>
            <li className='cursor-pointer hover:text-green-600 hover:underline'>AI Services </li>
            <li className='cursor-pointer hover:text-green-600 hover:underline'>Design & Creative </li>
            <li className='cursor-pointer hover:text-green-600 hover:underline'>Sales & Marketing </li>
            <li className='cursor-pointer hover:text-green-600 hover:underline'>Admin & Customer Support</li>
            <li className='cursor-pointer hover:text-green-600'>More 
                <img src="/images/keyboard-arrow-down.png"
                     alt=""
                     className="material-symbols-outlined w-5 h-5"/>
            </li>
        </ul>
    </div>
  )
}

export default SubNavBar