import React from "react";

export default function NavFindWork({ onMouseEnter, onMouseLeave, isFindWork}) {
  return (
    <div 
      className={`grid-cols-4 py-9 gap-4 pl-6 pr-28 ${isFindWork ? "grid" : "hidden"} w-full fixed top-16 z-30 bg-white shadow-md border-0 border-t border-t-gray-300 text-sm`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className="hover:bg-gray-400 rounded-lg p-6 h-28 w-52">
        <a href=""> 
          <h4 className="text-black">Ways to earn Learn</h4>
          <p className="text-gray-700">
            why Upwork has the right opportunities for you.
          </p>
        </a>
      </div>
      <div className="hover:bg-gray-400 rounded-lg p-6 h-28 w-52">
        <a href="">
          <h4 className="text-black">Find work for your skills</h4>
          <p className="text-gray-700">
            Explore the kind of work available in your field.
          </p>
        </a>
      </div>
      <div className="hover:bg-gray-400 rounded-lg p-6 h-24 w-60">
        <a href="">
          <h4 className="text-black">Win work with ads</h4>
          <p className="text-gray-700">
          Get noticed by the right client.
          </p>
        </a>
      </div>
      <div className="hover:bg-gray-400 rounded-lg p-6">
        <a href="">
          <h4 className="text-black">Join Freelancer Plus</h4>
          <p className="text-gray-700">
          Access more Connects, get strategic insights on competitors, and try out the latest tools.
          </p>
        </a>
      </div>
    </div>
  );
}
