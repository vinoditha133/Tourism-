import React, { useEffect, useRef, useState } from 'react'

import { FaSearch } from "react-icons/fa";

const SearchComponents = () => {
const sData =useRef(null);
    const [expanded, setExpanded] = useState(true);
   const [data, setData] = useState([]);
   const [searchTerm,setSearchTerm] = useState ('');
   const [SearchResults, setSearchResults] = useState([]);
useEffect(() =>{
getData();
},[]);
const getData = async() =>{
  const get = await fetch('https://tour-booking-tu7f.onrender.com/api/v1/tours')
 const res= await get.json();
console.log(res.data);
setData(res.data); 
setSearchResults(res.data);  
}
 const toggleSearch=(event)=>{
    setExpanded(expanded);
    const searchTerm=sData.current.value;
    setSearchTerm(searchTerm);
// const filteredResults = data.filter((item)=> item.name.includes(searchTerm)
//  );
//  setSearchResults(filteredResults);
 };

  return (
    <div>
    <FaSearch  className="searchButton" size="30"  variant="" onClick={toggleSearch} />
    {
        expanded && ( 
            <div className='searchbox rounded-pill'>
                <div className='row'>
                <div className='col-md-3 p-1 ms-3 me-3 pe-5 search-col'>
                <span className='row color'><label htmlFor="location">location</label></span>  
                <span className='row'><input className='searchbox2 rounded' type="text" name="location"  ref={sData} placeholder="Where are you going"/>     
                </span> 
          </div>
          <div className='col-md-2 p-1 ms-3 me-3 pe-5 search-col'>
                <span className='row color'> <label htmlFor="distance">distance</label></span>  
                <span className='row'><input className='searchbox2 rounded' type="text" name="distance" ref={sData} placeholder="Distance k/m"/>     
                </span> 
          </div>
          <div className='col-md-2 p-1 ms-3 me-3 pe-3 search-col'>
                <span className='row color'> <label htmlFor="maxPle">maxpeaple</label></span>  
                <span className='row'><input className='searchbox2 rounded' type="text" name="maxPle" ref={sData} placeholder="0"/>       
                </span> 
          </div>
                  </div> </div>
        )} 
         {/* <div className='container'>
  <a href="#" className="btn btn-warning rounded-pill mt-5 me-5 ps-4 pe-3 text-center">explore</a><h1 className='mt-5'>Our feature tours</h1>
  <div className="row ">
    {/* Features card start here */}
    {/* {SearchResults.length ? (<div className='row'>
                    
{SearchResults.map((place,index) => (
   
    <div  className="card img-fluid col-lg-3 col-md-5 col-sm-12 mb-2"> 
    <Link  style={{ textDecoration:'none' }}to={`/tours/${place._id}`}>
    <div className='card my-2'>
       <img className="card-img" src={place.photo} width="300" height="200" alt={place.title} />
     <div className="card-img pe-30px text-end">
         <h2   className="card-title">{place.city}</h2><span></span>
       <h5  className="card-text1">{place.title}</h5>
       <span>${place.price}/per person</span><a href="#" className="btn btn-warning rounded">Book Now</a>
       </div>
     </div>
     </Link>
     </div> 
     
    ))}
    </div>):(<Loader/>) }
  </div>
  </div> */}  
    </div>
  );
};

export default SearchComponents
