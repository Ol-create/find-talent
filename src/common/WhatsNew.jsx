import React from 'react'

const WhatsNew = ({isWhatsNew, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className={`grid-cols-4 py-9 gap-4 pl-6 ${isWhatsNew ? "grid" : "hidden"} w-full fixed top-16 z-30 bg-white shadow-md border-0 border-t border-t-gray-300 text-sm`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
      <div className="hover:bg-gray-400 rounded-lg p-6 h-28 w-64">
        <a href=""> 
          <h4 className="text-black">Upwork Updates</h4>
          <p className="text-gray-700">
          Check out our latest products, partners, and enhancements.
          </p>
        </a>
      </div>
      <div className="hover:bg-gray-400 rounded-lg p-6 h-28 w-64">
        <a href="">
          <h4 className="text-black">Blog</h4>
          <p className="text-gray-700">
          News and stories from the world’s work marketplace.
          </p>
        </a>
      </div>
      <div className="hover:bg-gray-400 rounded-lg p-6 h-32 w-64">
        <a href="">
          <h4 className="text-black">Research Institute</h4>
          <p className="text-gray-700">
          Insights and tools for business leaders navigating a new world of work.
          </p>
        </a>
      </div>
      
    </div>
  )
}

export default WhatsNew





