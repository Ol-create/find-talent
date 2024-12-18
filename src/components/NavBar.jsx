import React, { useState } from "react";
import { Link } from 'react-router-dom';
import NavFindTalent from "../common/NavFindTalent";
import NavFindWork from "../common/NavFindWork";
import WhyUpwork from "../common/WhyUpwork";

export default function NavBar() {
  const [findTalent, setFindTalent] = useState(false);
  const [whyUpwork, setWhyUpwork] = useState(false);

  const handleOnMouseOver = () => {
    setFindTalent(true);
  };

  const handleOnMouseLeave = () => {
    setFindTalent(false);
  };
  const handleOnMouseOverWhyUpwork = () => {
    setWhyUpwork(true);
  };

  const handleOnMouseLeaveWhyUpwork = () => {
    setWhyUpwork(false);
  };

  // Translate hover icon
  let icon = <span className="material-icons">expand_more</span>;
  if (findTalent) {
    icon = <span className="material-icons">expand_less</span>;
  }
  return (
    <>
      <div className=" fixed top-0 bg-white w-full flex justify-between px-3 pt-3  border-b border-gray-300 z-30">
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
            <li className="hover:text-green-600 hover:cursor-pointer h-full flex"
                onMouseMove={handleOnMouseOverWhyUpwork}
                onMouseLeave={handleOnMouseLeaveWhyUpwork}>
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
          <Link to="/login"> <span>Log in</span> </Link>
          
          <button className="rounded-full bg-green-600 px-5 py-2 text-white">
            <Link to="/signup">Sign up</Link>
          </button>
        </div>
      </div>
      <NavFindTalent
        findTalent={findTalent}
        onMouse={handleOnMouseOver}
        mouseLeave={handleOnMouseLeave}
      />
      <NavFindWork />
      <WhyUpwork whyUpwork={whyUpwork}
        onMouse1={handleOnMouseOverWhyUpwork}
        mouseLeave1={handleOnMouseLeaveWhyUpwork}/>
    </>
  );
}
