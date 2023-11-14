import React from 'react'

import airbnb from "../images/Upwork _ images/supported_by/airbnb.svg"
import display_advert from "../images/Upwork _ images/display_home.png";
import microsoft from "../images/Upwork _ images/supported_by/microsoft.svg";
import bissell from "../images/Upwork _ images/supported_by/bissell.svg";
import icon from "../images/google-icon.png"

export default function Home() {
  return (
    <div className="bg-blue-600 container mx-auto px-4">
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
      </div>
    </div>
  );
}
