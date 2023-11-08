import React from 'react'
import MarketPlace from './NavFindTalent/MarketPlace';
import logo from '../images/logo.webp'
import articles from '../images/blog.webp'
import wordpress from '../images/wp.webp';
import social_media from '../images/smm.webp';
import video_editing from '../images/videoedit.jpg';
import seo from '../images/seo.webp'

export default function NavFindTalent({display, onMouse, mouseLeave}) {
    let classes = "space-x-32 p-8 hidden";
    if (display) {
        classes = "flex space-x-16 p-8 border-x-2 rounded-md border-green ";
    }
  return (
    <div class={classes} onMouseEnter={onMouse} onMouseLeave={mouseLeave}>
      <div className=" border-r border-gray-400 pr-10">
        <a href="">
          <div className="hover:bg-gray-200 rounded-lg pl-6 py-6 pr-56 flex-1 relative">
            <p className="">
              Post a job and hire a pro <br />
              <span className="text-green-600">Talent Marketplace</span>
            </p>
            <span class="material-icons absolute right-5 top-9 text-green-600">
              chevron_right
            </span>
          </div>
        </a>
        {/* <div className="hover:bg-gray-200 rounded-lg pl-3 py-2 ">
          <a href="">
            <p>Browse and buy projects</p>
            <p className="text-green-600">Project Catalog</p>
          </a>
        </div> */}
        <a href="">
          <div className="hover:bg-gray-200 rounded-lg pl-6 py-6 pr-56 flex-1 relative">
            <p className="">
              Browse and buy projects <br />
              <span className="text-green-600">Project Catalog</span>
            </p>
            <span class="material-icons absolute right-5 top-9 text-green-600">
              chevron_right
            </span>
          </div>
        </a>
        {/* <div className="hover:bg-gray-200 rounded-lg pl-3 py-2 ">
          <a href="">
            <p>Get advice from industrial expert</p>
            <p className="text-green-600">Consultation</p>
          </a>
        </div> */}
        <a href="">
          <div className="hover:bg-gray-200 rounded-lg pl-6 py-6 pr-56 flex-1 relative">
            <p className="max-w-[300px] bg-red-400">
              Get advice from industrial expert <br />
              <span className="text-green-700">Consultation</span>
            </p>
            <span class="material-icons absolute right-5 top-9 text-green-700">
              chevron_right
            </span>
          </div>
        </a>
      </div>
      {/* <MarketPlace /> */}
      <div className="flex space-x-10">
        <div className="">
          <div className="border-t-[6px] border-green-700 w-[70px] mb-5" />
          <h3 className="mb-4 text-lg font-bold">Project CatalogTM</h3>
          <p>
            Browse and buy projects that <br /> have a clear scope and price.
          </p>
          <a href="" className="mt-6 text-green-700 flex">
            <span className='underline'>Browse Project Catalog</span>
            <span className="material-icons ml-2">east</span>
          </a>
        </div>
        {/* Images columns */}
        <div className="grid grid-cols-3 gap-y-3 gap-x-7">
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-48 sm:h-48 ">
            <img src={logo} alt="logo" className="sm:h-32 w-full" />
            <p className="sm:p-5 text-center">Logo Design</p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-48 sm:h-48 ">
            <img src={articles} alt="logo" className="sm:h-32 w-full" />
            <p className="sm:p-5 text-center"> Articles & Blog Posts</p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-48 sm:h-48 ">
            <img src={wordpress} alt="logo" className="sm:h-32 w-full" />
            <p className="sm:p-5 text-center">WordPress</p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-48 sm:h-48 ">
            <img src={social_media} alt="logo" className="sm:h-32 w-full " />
            <p className="sm:p-2 text-center">
              Social Media <br /> Marketing
            </p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-48 sm:h-48 ">
            <img src={video_editing} alt="logo" className="sm:h-32 w-full" />
            <p className="sm:p-5 text-center">Logo Design</p>
          </div>
          <div className="rounded-md border border-gray-300 overflow-hidden sm:w-48 sm:h-48 ">
            <img src={seo} alt="logo" className="sm:h-32 w-full" />
            <p className="sm:p-5 text-center">SEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
