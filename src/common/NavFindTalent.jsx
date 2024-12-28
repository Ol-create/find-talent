import React, { useState } from 'react'
import MarketPlace from './NavFindTalent/MarketPlace';

import Catalog from './NavFindTalent/Catalog';
import Consultation from './NavFindTalent/Consultation';

export default function NavFindTalent({findTalent, onMouse, mouseLeave}) {
  const [ isCatalog, setCatalog ] = useState(false)
  const [ isMarketPlace, setMarketPlace ] = useState(true)
  const [ isConsultation, setConsultation ] = useState(false)

  const handleMouseEnterCatalog = () => {
    setMarketPlace(false)
    setConsultation(false)
    setCatalog(true)
  }

  const handleMouseEnterMarketPlace = () => {
    setCatalog(false)
    setConsultation(false)
    setMarketPlace(true)
  }

  const handleMouseEnterConsultation = () => {
       setMarketPlace(false)
       setCatalog(false)
       setConsultation(true)
  }
  
   
  return (
    <div className={`space-x-6 p-8 w-full ${findTalent ? "flex" : "hidden"} fixed top-16 z-30 bg-white shadow-md border-0 border-t border-t-gray-300`}
    onMouseEnter={onMouse}
    onMouseLeave={mouseLeave}>
      <div className=" border-r border-gray-400 pr-10 w-96">

        <a className='mb-3' 
           href=""
           onMouseEnter={handleMouseEnterMarketPlace}>
          <div className={`${isMarketPlace ? "bg-gray-200": ""} rounded-lg pl-3 py-3 flex flex-row items-center`}>
  <p className="flex-1">
    Post a job and hire a pro <br />
    <span className="text-green-600 pt-3 ">Talent Marketplace</span>
  </p>
  <span className="material-icons block mr-3 text-green-600">
    chevron_right
  </span>
</div>
  </a>


        <a className='mb-3' 
           href=""
           onMouseEnter={handleMouseEnterCatalog}
           >
          <div className={`${isCatalog ? "bg-gray-200": ""} rounded-lg pl-3 py-3 flex flex-row items-center`}>
            <p className="flex-1">
              Browse and buy projects <br />
              <span className="text-green-600 pt-3">Project Catalog</span>
            </p>
            <span class="material-icons mr-3 text-green-600">
              chevron_right
            </span>
          </div>
        </a>

        <a className='mb-3' 
           href=""
           onMouseEnter={handleMouseEnterConsultation}>
          <div className={`${isConsultation ? "bg-gray-200": ""} rounded-lg pl-3 py-3 flex flex-row items-center`}>
            <p className="flex-1">
              Get advice from industrial expert <br />
              <span className="text-green-700">Consultation</span>
            </p>
            <span class="material-icons mr-3 text-green-600">
              chevron_right
            </span>
          </div>
        </a>
      </div>
      {/* <MarketPlace /> */}
      <Catalog 
         isCatalog={isCatalog}/>

      <MarketPlace 
         isMarketPlace={isMarketPlace}/>

      <Consultation 
         isConsultation={isConsultation}/>

    </div>
  );
}
