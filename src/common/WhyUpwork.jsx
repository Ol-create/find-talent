import React from 'react'

export default function WhyUpwork({whyUpwork, onMouse1, mouseLeave1}) {
  let classes = 'hidden';
  if (whyUpwork) {
    classes = 'fixed top-16 z-30 w-full bg-white flex justify-between pt-20 px-16 shadow-md pb-7 border-0 border-t border-t-gray-300'
  }
  return (
    <div className={classes} onMouseEnter={onMouse1} onMouseLeave={mouseLeave1}>
      <div className='grid grid-cols-2 gap-1'>
      <div>
        <a href="">
          <div className="hover:bg-gray-300 rounded-md p-7 w-80">
            <h4 className="mb-3">Success Stories</h4>
            <p className="text-gray-800 text-sm">
              Discover how teams work <br /> strategically and grow together.
            </p>
          </div>
        </a>

        <a href="">
          <div className="hover:bg-gray-300 rounded-md p-7 w-80">
            <h4 className="mb-3">How to hire </h4>
            <p className="text-gray-800 text-sm">
              Learn about the different ways to <br /> get work done.
            </p>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div className="hover:bg-gray-300 rounded-md p-7 w-80">
            <h4 className="mb-3">Reviews </h4>
            <p className="text-gray-800 text-sm">
              See what it’s like to collaborate on <br /> Upwork.
            </p>
          </div>
        </a>
        <a href="">
          <div className="hover:bg-gray-300 rounded-md p-7 w-80">
            <h4 className="mb-3">How to find work</h4>
            <p className="text-gray-800 text-sm">
              Learn about how to grow your <br /> independent career.
            </p>
          </div>
        </a>
      </div>
      </div>
      <div>
        <h4 className="mb-9">Where work gets done</h4>
        <a href="">
          <div className="border border-gray-300 py-2 px-7 rounded-lg hover:bg-gray-300 mb-3 w-80">
            <p className="text-xs mb-2 text-gray-400">Guides</p>
            <p className="text-sm">Getting Started as a Freelancer</p>
          </div>
        </a>
        <a href="">
          <div className="border border-gray-300 py-2 px-7 rounded-lg hover:bg-gray-300 mb-3 w-80">
            <p className="text-xs mb-2 text-gray-400">Guides</p>
            <p className="text-sm">Growing Your Freelance Career</p>
          </div>
        </a>
        <a href="">
          <div className="border border-gray-300 py-2 px-7 rounded-lg hover:bg-gray-300 mb-6 w-80">
            <p className="text-xs mb-2 text-gray-400">Guides</p>
            <p className="text-sm">Hiring & Working with Independent Talent</p>
          </div>
        </a>
        <a href="" className="text-green-600 underline">
          See Resources
        </a>
      </div>
    </div>
  );
}
