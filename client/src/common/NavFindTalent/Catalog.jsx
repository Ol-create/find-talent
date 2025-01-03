import React from 'react';

import logo from '../../images/logo.webp';
import articles from '../../images/blog.webp';
import wordpress from '../../images/wp.webp';
import social_media from '../../images/smm.webp';
import video_editing from '../../images/videoedit.jpg';
import seo from '../../images/seo.webp';

const Catalog = ({ isCatalog }) => {
  return (
    <div 
       className={`${isCatalog ? "flex": "hidden"} space-x-1`}
       >
        <div className="">
          <div className="border-t-[6px] border-green-700 w-[70px] mb-5" />
          <h3 className="mb-4 text-lg font-bold">Project CatalogTM</h3>
          <p className=''>
            Browse and buy projects <br /> that have a clear scope and price.
          </p>
          <a href="" className="mt-6 text-green-700 flex">
            <span className='underline'>Browse Project Catalog</span>
            <img src="/images/arrow_right.png" 
                 alt=""
                 className='w-6 ml-2 mt-1 text-green-700' />
          </a>
        </div>
        {/* Images columns */}
        <div className="grid grid-cols-3 gap-y-3 gap-x-4 mt-14 pl-5">
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-40 sm:h-40 ">
            <img src={logo} alt="logo" className="sm:h-24 w-full" />
            <p className="p-5 text-center ">Logo Design</p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-40 sm:h-40 ">
            <img src={articles} alt="logo" className="sm:h-24 w-full" />
            <p className="sm:p-2 text-center"> Articles & Blog Posts</p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-40 sm:h-40 ">
            <img src={wordpress} alt="logo" className="sm:h-24 w-full" />
            <p className="sm:p-5 text-center">WordPress</p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-40 sm:h-40 ">
            <img src={social_media} alt="logo" className="sm:h-24 w-full " />
            <p className="sm:p-2 text-center">
              Social Media <br /> Marketing
            </p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-40 sm:h-40 ">
            <img src={video_editing} alt="logo" className="sm:h-24 w-full" />
            <p className="sm:p-5 text-center">Logo Design</p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-40 sm:h-40 ">
            <img src={seo} alt="logo" className="sm:h-24 w-full" />
            <p className="sm:p-5 text-center">SEO</p>
          </div>
        </div>
      </div>
  )
}

export default Catalog