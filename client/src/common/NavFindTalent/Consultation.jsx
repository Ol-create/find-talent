import React from 'react';

import web from '../../images/web_programming.webp';
import ai from '../../images/ai.webp';
import marketing from '../../images/marketing.webp';
import social_media from '../../images/social_media.webp';
import cms from '../../images/website_builders.webp';

const Consultation = ({ isConsultation }) => {
  return (
    <div 
       className={`${isConsultation ? "flex": "hidden"} space-x-1`}
       >
        <div className="text-sm">
          <div className="border-t-[6px] border-green-700 w-[70px] mb-5" />
          <h3 className="mb-4 text-lg font-bold">Consultations</h3>
          <p className='w-52 '>
          Explore what is possible with an industry expert. 
          See their availability and book a time that works for you.
          </p>
          <a href="" className="mt-6 text-green-700 flex">
            <span className='underline'>Explore all categories</span>
            <img src="/images/arrow_right.png" 
                 alt=""
                 className='w-6 ml-2 text-green-700' />
          </a>
        </div>
        {/* Images columns */}
        <div className="grid grid-cols-3 gap-y-3 gap-x-4 mt-14 pl-5">
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-40 sm:h-40 ">
            <img src={web} alt="logo" className="h-24 w-full" />
            <p className="py-5 text-center ">Web Programing</p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-40 sm:h-40 ">
            <img src={ai} alt="logo" className="h-24 w-full" />
            <p className="py-2 text-center"> AI & Machine Learning</p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-40 sm:h-40 ">
            <img src={marketing} alt="logo" className="sm:h-24 w-full" />
            <p className="py-5 text-center">Marketing Strategy</p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-40 sm:h-40 ">
            <img src={social_media} alt="logo" className="sm:h-24 w-full " />
            <p className="py-1 text-center">
              Social Media <br /> Marketing
            </p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-40 sm:h-40 ">
            <img src={cms} alt="logo" className="sm:h-24 w-full" />
            <p className="py-1 text-center">Website Builders & CMS</p>
          </div>
        </div>
      </div>
  )
}

export default Consultation