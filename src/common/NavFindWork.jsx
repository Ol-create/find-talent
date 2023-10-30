import React from "react";

export default function NavFindWork() {
  return (
    <div className="grid-cols-3 py-9 gap-10 mx-6 hidden">
      <div className="hover:bg-gray-200 rounded-lg p-7">
        <a href="">
          <h4>Ways to earn Learn</h4>
          <p className="text-gray-600">
            why Upwork has the right opportunities for you.
          </p>
        </a>
      </div>
      <div className="hover:bg-gray-200 rounded-lg p-7">
        <a href="">
          <h4>Find work for your skills</h4>
          <p className="text-gray-600">
            Explore the kind of work available in your field.
          </p>
        </a>
      </div>
      <div className="hover:bg-gray-200 rounded-lg p-7">
        <a href="">
          <h4>Find ways to promote yourself</h4>
          <p className="text-gray-600">
            Show clients you’re the one they want.
          </p>
        </a>
      </div>
    </div>
  );
}
