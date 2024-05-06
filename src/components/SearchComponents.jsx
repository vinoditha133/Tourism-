import React, { useState } from 'react'

import { FaSearch } from "react-icons/fa";

const SearchComponents = () => {
    const [expanded, setExpanded] = useState(true);
 const toggleSearch=()=>{
    setExpanded(expanded);
 };
  return (
    <div>
    <FaSearch className="searchButton" size="30" variant="" onClick={toggleSearch} />
    {
        expanded && (
            <div className='searchbox rounded-pill'>
                <div className='row'>
                <div className='col-md-3 p-1 ms-3 me-3 pe-5 search-col'>
                <span className='row color'><label htmlFor="location">location</label></span>  
                <span className='row'><input className='searchbox2 rounded' type="text" name="location" placeholder="Where are you going"/>     
                </span> 
          </div>
          <div className='col-md-2 p-1 ms-3 me-3 pe-5 search-col'>
                <span className='row color'> <label htmlFor="distance">distance</label></span>  
                <span className='row'><input className='searchbox2 rounded' type="text" name="distance" placeholder="Distance k/m"/>     
                </span> 
          </div>
          <div className='col-md-2 p-1 ms-3 me-3 pe-3 search-col'>
                <span className='row color'> <label htmlFor="maxPle">maxpeaple</label></span>  
                <span className='row'><input className='searchbox2 rounded' type="text" name="maxPle" placeholder="0"/>       
                </span> 
          </div>
                  </div> </div>
        )}  
    </div>
  );
};

export default SearchComponents
