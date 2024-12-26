import React from 'react'
import MarketPlace from './NavFindTalent/MarketPlace';
import logo from '../images/logo.webp'
import articles from '../images/blog.webp'
import wordpress from '../images/wp.webp';
import social_media from '../images/smm.webp';
import video_editing from '../images/videoedit.jpg';
import seo from '../images/seo.webp'

export default function NavFindTalent({findTalent, onMouse, mouseLeave}) {
   
  return (
    <div className={`space-x-6 p-8 w-full ${findTalent ? "flex" : "hidden"} fixed top-16 z-30 bg-white shadow-md border-0 border-t border-t-gray-300`}
    onMouseEnter={onMouse}
    onMouseLeave={mouseLeave}>
      <div className=" border-r border-gray-400 pr-10 w-96">
        <a className='mb-3' href="">
          <div className="hover:bg-gray-200 rounded-lg pl-3 py-3  flex flex-row items-center">
  <p className="flex-1">
    Post a job and hire a pro <br />
    <span className="text-green-600 pt-3 ">Talent Marketplace</span>
  </p>
  <span className="material-icons block mr-3 text-green-600">
    chevron_right
  </span>
</div>
  </a>


        <a className='mb-3' href="">
          <div className="hover:bg-gray-200 rounded-lg pl-3 py-3 flex flex-row items-center">
            <p className="flex-1">
              Browse and buy projects <br />
              <span className="text-green-600 pt-3">Project Catalog</span>
            </p>
            <span class="material-icons mr-3 text-green-600">
              chevron_right
            </span>
          </div>
        </a>

        <a className='mb-3' href="">
          <div className="hover:bg-gray-200 rounded-lg pl-3 py-3 flex flex-row items-center">
            <p className="flex-1">
              Get advice from industrial expert <br />
              <span className="text-green-700">Consultation</span>
            </p>
            <span class="material-icons mr-3 text-green-600">
              chevron_right
            </span>
          </div>
        </a>
      </div>
      {/* <MarketPlace /> */}
      <div className="flex space-x-1">
        <div className="">
          <div className="border-t-[6px] border-green-700 w-[70px] mb-5" />
          <h3 className="mb-4 text-lg font-bold">Project CatalogTM</h3>
          <p className=''>
            Browse and buy projects <br /> that have a clear scope and price.
          </p>
          <a href="" className="mt-6 text-green-700 flex">
            <span className='underline'>Browse Project Catalog</span>
            <span className="material-icons ml-2">east</span>
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
    </div>
  );
}
