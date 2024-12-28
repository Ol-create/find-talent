import React from 'react'

export default function MarketPlace({isMarketPlace}) {
  return (
    <div className={`${isMarketPlace ? "flex": "hidden"} space-x-20`}>
      <div>
      <div className="border-t-[6px] border-green-700 w-[70px] mb-5" />
        <h3>Talent Marketplace™</h3>
        <p className="text-gray-700 w-56 text-xs my-2">
          Learn about working with talent or explore
          your specific hiring needs.
        </p>

        <div className='flex cursor-pointer'>
        <a href="" className="text-blue-600">
          Learn more
        </a> 
        <img src="/images/arrow_right_blue.png" 
                 alt=""
                 className='w-6 ml-3 mt-[2px] text-green-700' />
        </div>
      </div>
      <div className="mt-8 text-xs w-80">
        <a href="" className="block px-5 py-2 rounded-lg hover:bg-gray-300 w-full ">
          Development & IT
        </a>
        <a href="" className="block px-5 py-2 rounded-lg hover:bg-gray-300 w-full">
          Design & Creative
        </a>
        <a href="" className="block px-5 py-2 rounded-lg hover:bg-gray-300 w-full">
          Sales & Marketing
        </a>
        <a href="" className="block px-5 py-2 rounded-lg hover:bg-gray-300 w-full">
          Writing & Translation
        </a>
        <a href="" className="block px-5 py-2 rounded-lg hover:bg-gray-300 w-full">
          Admin & Customer Support
        </a>
        <a href="" className="block px-5 py-2 rounded-lg hover:bg-gray-300 w-full">
          Finance & Accounting
        </a>
        <a href="" className="block px-5 py-2 rounded-lg hover:bg-gray-300 w-full">
          HR & Training
        </a>
        <a href="" className="block px-5 py-2 rounded-lg hover:bg-gray-300 w-full">
          Legal
        </a>
        <a href="" className="block px-5 py-2 rounded-lg hover:bg-gray-300 w-full">
          Engineering & Architecture
        </a>
        <a href="" className="block px-5 py-2 rounded-lg hover:bg-gray-300 w-full">
          See all specializations
        </a>
      </div>
    </div>
  );
}
