import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
const Features = () => {
    const [data, setData]=useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    useEffect(() => {
        getData();
      },[]);
      
      const getData = async () => {
      const data = await fetch(`https://tour-booking-tu7f.onrender.com/api/v1/tours`);
      const res = await data.json();
      console.log(res.data);
      setData(res.data);
      }
      const handleClick=(num)=>{
      setPageNumber(num);
      } 
      
  return (
    <div>
       <div className='container'>
  <a href="#" className="btn btn-warning rounded-pill mt-5 me-5 ps-4 pe-3 text-center">explore</a><h1 className='mt-5'>Our feature tours</h1>
  <div className="row ">
    {/* Features card start here */}
    {data.length ? (<div className='row'>
                    
{data.map((place,index) => (
   
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
  </div>
  {
    [1,2].map((num)=>(
        <button className='btn btn-warning rouded-pill ms-1' onClick={()=>handleClick(num)}>{num}</button>
    ))
}
    </div>
  )
}

export default Features
