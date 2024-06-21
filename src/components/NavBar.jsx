import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavFindTalent from "../common/NavFindTalent";
import NavFindWork from "../common/NavFindWork";
import WhyUpwork from "../common/WhyUpwork";

export default function NavBar() {
  const [display, setDisplay] = useState(false);

  const handleOnMouseOver = () => {
    setDisplay(true);
  };

  const handleOnMouseLeave = () => {
    setDisplay(false);
  };

  // Translate hover icon
  let icon = <span className="material-icons">expand_more</span>;
  if (display) {
    icon = <span className="material-icons">expand_less</span>;
  }
  return (
    <>
      <div className="flex justify-between px-3 pt-3  border-b border-gray-300 ">
        <div>
          <ul className="flex space-x-4 items-center h-full pr-3 pt-2">
            <li className="text-green-600 h-full">
              <Link to="/">Upwork</Link>
            </li>
            <li
          
              className="hover:text-green-600 hover:cursor-pointer h-full flex"
              onMouseEnter={handleOnMouseOver}
              onMouseLeave={handleOnMouseLeave}
            >
              Find Talent {icon}
              {/* <span className="material-icons flex transform hover:rotate-180 bg-gray-400 bg- ">
                expand_more
              </span> */}
            </li> 
            <li className="hover:text-green-600 hover:cursor-pointer h-full flex">
              Find Work <span className="material-icons ">expand_more</span>
            </li>
            <li className="hover:text-green-600 hover:cursor-pointer h-full flex">
              Why Upwork <span className="material-icons">expand_more</span>
            </li>
            <li className="h-full hover:text-green-600">
              <Link to="/enterprise">Enterprise</Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-5 items-center pb-3">
          <div className="border-solid border-2 border-gray-700 rounded-full py-2 px-8">
            <input className="outline-none" type="text" placeholder="Search" />
            <span>Talent</span>
          </div>
          <span>Log in</span>
          <button className="rounded-full bg-green-600 px-5 py-2 text-white">
            Sign in
          </button>
        </div>
      </div>
      <NavFindTalent
        display={display}
        onMouse={handleOnMouseOver}
        mouseLeave={handleOnMouseLeave}
      />
      <NavFindWork />
      <WhyUpwork />
    </>
  );
}
