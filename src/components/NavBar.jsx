import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavFindTalent from "../common/NavFindTalent";
import NavFindWork from "../common/NavFindWork";
import WhyUpwork from "../common/WhyUpwork";
import WhatsNew from "../common/WhatsNew";
import SubNavBar from "../common/SubNavBar";

export default function NavBar() {
  const [findTalent, setFindTalent] = useState(false);
  const [isFindWork, setFindWork] = useState(false);
  const [whyUpwork, setWhyUpwork] = useState(false);
  const [isWhatsNew, setWhatsNew] = useState(false);

  const handleOnMouseOver = () => {
    setFindTalent(true);
  };

  const handleOnMouseLeave = () => {
    setFindTalent(false);
  };

  const handleOnMouseOverFindWork = () => {
    setFindWork(true);
  };

  const handleOnMouseLeaveFindWork = () => {
    setFindWork(false);
  };
  const handleOnMouseOverWhyUpwork = () => {
    setWhyUpwork(true);
  };

  const handleOnMouseLeaveWhyUpwork = () => {
    setWhyUpwork(false);
  };
  const handleOnMouseOverWhatsNew = () => {
    setWhatsNew(true);
  };

  const handleOnMouseLeaveWhatsNew = () => {
    setWhatsNew(false);
  };

  return (
    <>
      <div className="fixed top-0 bg-white w-full flex justify-between px-3 pt-3 border-b border-gray-300 z-30">
        <div>
          <ul className="flex space-x-4 items-center h-full pr-3 pt-2">
            <li className="text-green-600 h-full">
              <Link to="/">Upwork</Link>
            </li>
            <li
              className="hover:text-green-600 hover:cursor-pointer h-full flex group1"
              onMouseEnter={handleOnMouseOver}
              onMouseLeave={handleOnMouseLeave}
            >
              <p>Find Talent</p>
              <img
                src="/images/keyboard-arrow-down.png"
                alt=""
                className={`material-symbols-outlined relative top-1 w-5 h-5 transform transition-transform duration-100 ${
                  findTalent ? "rotate-180" : ""
                }`}
              />
            </li>

            <li
              className="hover:text-green-600 hover:cursor-pointer h-full flex group1"
              onMouseEnter={handleOnMouseOverFindWork}
              onMouseLeave={handleOnMouseLeaveFindWork}
            >
              <p>Find Work</p>
              <img
                src="/images/keyboard-arrow-down.png"
                alt=""
                className={`material-symbols-outlined relative top-1 w-5 h-5 transform transition-transform duration-100 ${
                  isFindWork ? "rotate-180" : ""
                }`}
              />
            </li>
            
            <li
              className="hover:text-green-600 hover:cursor-pointer h-full flex"
              onMouseEnter={handleOnMouseOverWhyUpwork}
              onMouseLeave={handleOnMouseLeaveWhyUpwork}
            >
              <p>Why Upwork</p> <img
                src="/images/keyboard-arrow-down.png"
                alt=""
                className={`material-symbols-outlined relative top-1 w-5 h-5 transform transition-transform duration-100 ${
                  whyUpwork ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="hover:text-green-600 hover:cursor-pointer h-full flex"
              onMouseEnter={handleOnMouseOverWhatsNew}
              onMouseLeave={handleOnMouseLeaveWhatsNew}
            >
              <p>What's new</p> <img
                src="/images/keyboard-arrow-down.png"
                alt=""
                className={`material-symbols-outlined relative top-1 w-5 h-5 transform transition-transform duration-100 ${
                  isWhatsNew ? "rotate-180" : ""
                }`}
              />
            </li>
            <li className="h-full hover:text-green-600">
              <Link to="/enterprise">Enterprise</Link>
            </li>
            <li className="h-full hover:text-green-600">
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-5 items-center pb-3">
          <div className="border-solid border-2 border-gray-700 rounded-full py-2 px-8">
            <input className="outline-none" type="text" placeholder="Search" />
            <span>Talent</span>
          </div>
          <Link to="/login">
            {" "}
            <span>Log in</span>{" "}
          </Link>
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
      <NavFindWork
        isFindWork={isFindWork}
        onMouseEnter={handleOnMouseOverFindWork}
        onMouseLeave={handleOnMouseLeaveFindWork}
      />
      <WhyUpwork
        whyUpwork={whyUpwork}
        onMouse1={handleOnMouseOverWhyUpwork}
        mouseLeave1={handleOnMouseLeaveWhyUpwork}
      />
      <WhatsNew
        isWhatsNew={isWhatsNew}
        onMouseEnter={handleOnMouseOverWhatsNew}
        onMouseLeave={handleOnMouseLeaveWhatsNew}
      />
      <SubNavBar />
    </>
  );
}
