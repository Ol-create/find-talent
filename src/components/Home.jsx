import React from 'react'

import airbnb from "../images/Upwork _ images/supported_by/airbnb.svg"
import display_advert from "../images/Upwork _ images/display_home.png";
import microsoft from "../images/Upwork _ images/supported_by/microsoft.svg";
import bissell from "../images/Upwork _ images/supported_by/bissell.svg";
import icon from "../images/google-icon.png"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1>How work should work</h1>
      <h3>
        Forget the old rules. You can have the best people. Right now. Right
        here.
      </h3>
      <a href="">Get started</a>
      <p>Support by</p>
      <div className="ml-3 flex space-x-3 overflow-hidden">
        <img src={microsoft} alt="microsoft logo" />
        <img src={airbnb} alt="airbnb logo" />
        <img src={bissell} alt="bissell logo" />
      </div>
      <img
        src={display_advert}
        alt="display advert"
        className="mx-auto w-full max-h-96"
      />
      <h2>Up your work game, it’s easy</h2>
      <div className="px-2">
        <div className="flex space-x-3">
          <img src={icon} alt="No cost to join icon" className="w-4 h-4" />
          <div>
            <h3>No cost to join</h3>
            <p className="text-xs">
              Register and browse professionals, explore projects, or even book
              a consultation.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <img src={icon} alt="No cost to join icon" className="w-4 h-4" />
          <div>
            <h3>Post a job and hire top talent</h3>
            <p className="text-xs">
              Finding talent doesn’t have to be a chore. Post a job or we can
              search for you!
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <img src={icon} alt="No cost to join icon" className="w-4 h-4" />
          <div>
            <h3>Work with the best—without breaking the bank</h3>
            <p className="text-xs">
              Upwork makes it affordable to up your work and take advantage of
              low transaction rates.
            </p>
          </div>
        </div>
      </div>
      {/* Start of the button */}
      <a
        href=""
        className="block border border-green-300 text-center rounded-full mt-3 h-9 py-1 hover:bg-gray-200"
      >
        Learn hoe to hire
      </a>
      <h2>Browse talent by category</h2>
      <p>
        Looking for work?{" "}
        <a href="" className="text-green-600 underline">
          Browse jobs
        </a>
      </p>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-2'>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Development & IT</h3>
          <p className="flex space-x-3 items-center">
            <p className="bg-red-300 flex items-center">
              <span className="material-icons text-green-600 bg-yellow-400">
                star
              </span>
              <span className="bg-green-300">4.85/5</span>
            </p>
            <p className="">1853 skills</p>
          </p>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">AI Services </h3>
          <p className="flex space-x-3 items-center">
            <p className="bg-red-300 flex items-center">
              <span className="material-icons text-green-600 bg-yellow-400">
                star
              </span>
              <span className="bg-green-300">4.8/5 </span>
            </p>
            <p className="">294 skills</p>
          </p>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Design & Creative </h3>
          <p className="flex space-x-3 items-center">
            <p className="bg-red-300 flex items-center">
              <span className="material-icons text-green-600 bg-yellow-400">
                star
              </span>
              <span className="bg-green-300">4.91/5 </span>
            </p>
            <p className="">968 skills</p>
          </p>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Sales & Marketing </h3>
          <p className="flex space-x-3 items-center">
            <p className="bg-red-300 flex items-center">
              <span className="material-icons text-green-600 bg-yellow-400">
                star
              </span>
              <span className="bg-green-300">4.77/5 </span>
            </p>
            <p className="">392 skills</p>
          </p>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Writing & Translation </h3>
          <p className="flex space-x-3 items-center">
            <p className="bg-red-300 flex items-center">
              <span className="material-icons text-green-600 bg-yellow-400">
                star
              </span>
              <span className="bg-green-300">4.92/5 </span>
            </p>
            <p className="">505 skills</p>
          </p>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Admin & Customer Support </h3>
          <p className="flex space-x-3 items-center">
            <p className="bg-red-300 flex items-center">
              <span className="material-icons text-green-600 bg-yellow-400">
                star
              </span>
              <span className="bg-green-300">4.77/5 </span>
            </p>
            <p className="">508 skills</p>
          </p>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Finance & Accounting </h3>
          <p className="flex space-x-3 items-center">
            <p className="bg-red-300 flex items-center">
              <span className="material-icons text-green-600 bg-yellow-400">
                star
              </span>
              <span className="bg-green-300">4.79/5 </span>
            </p>
            <p className="">214 skills</p>
          </p>
        </div>
        <div className="bg-gray-200 mt-2 rounded-md p-2">
          <h3 className="text-xl">Engineering & Architecture</h3>
          <p className="flex space-x-3 items-center">
            <p className="bg-red-300 flex items-center">
              <span className="material-icons text-green-600 bg-yellow-400">
                star
              </span>
              <span className="bg-green-300">4.85/5 </span>
            </p>
            <p className="">650 skills</p>
          </p>
        </div>
      </div>
    </div>
  );
}
