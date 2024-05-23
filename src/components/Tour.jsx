import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import Loader from './Loader';
import { FaRegStar } from "react-icons/fa6";
import { IoLocation } from 'react-icons/io5';
import { BsCoin } from 'react-icons/bs';
import { GiPathDistance } from "react-icons/gi";
import { IoMdContacts } from 'react-icons/io';
import { HiMiniStar } from 'react-icons/hi2';

const Tour = () => {
  const [tour, setTour]= useState([]);
  const {_id} = useParams();
  const [nPer,setNPer]=useState(0)
  console.log(_id);
  useEffect(()=>{
    getData()
  },[])
  const getData = async () =>{
    let data = await fetch(`https://tour-booking-tu7f.onrender.com/api/v1/tours/${_id}`);
    let result = await data.json();
    setTour(result.data);
    console.log(result.data);
const handleInputP = (e) =>{
setNPer(e.target.value)
console.log(nPer);
    }
  }
  
  return (
    <>
    {Object.keys(tour).length ? (
       <div className='container'>
            {/* <div className=" col-md-4 col-lg-6 col-sm-8 m-3 card-container1">
              <img className="card-img" src={tour.photo} alt={tour.title} />
            hello
            </div>
            <div className="col-md-4 col-lg-6 col-sm-8 pe-1 text-end card-container2"> 
             <span className='fw-bold'>{tour.price}</span><span className='text-secondary'>/per person <span className='text-warning pb-2'><FaRegStar/> </span>1 (1)</span>
               <h2   className="card-title">{tour.city}</h2><span className='text-secondary gray-text'>light</span>
             <h5  className="card-text1">{tour.title}</h5>
             <h5>Information</h5>
             <a href="#" className="btn btn-warning rounded">Book Now</a>

           </div> */}
          
          <div className="row border">
            <div className="col-md-7 card-img-fluid card-container1 p-3">
              <span className="row border">
              <img className="card-img" src={tour.photo} width="300" height="200" alt={tour.title}/>
              </span>
              <div className="row border mt-2">
<div className='col-md-9'>
  <h2 className='pb-3'>{tour.title},{tour.city}</h2>
  <span className='text-warning pb-3'><FaRegStar/>1 (1) </span>
  <span className='text-dark ps-5'><IoLocation/>{tour.address}</span>
  
  <div className=' pt-3 pb-4'>
    <span className='ps-5'><IoLocation/>{tour.city}</span>
    <span className='ps-5'><BsCoin />{tour.price}per person</span>
    <span className='ps-5'><GiPathDistance />{tour.distance}K/m</span>
    <span className='ps-4'><IoMdContacts/> 8 people</span></div>
<div><h5>Description</h5>
<p>{tour.desc}</p></div>
</div>
  
              </div>
            </div>
            <div className="col-md-5 card-container2 p-3 pt-3 pb-3 border">
             <div><span className="row text-center"><span className='text-secondary pt-2 pb-4'>{tour.price}/per person <span className='text-warning pb-2'><FaRegStar/> </span>1 (1)</span>
             <h5>Information</h5>
             <input type="text" name="name" className="input-f" placeholder=" Full Name"/>
             <input type="text" name="phone" className="input-p" placeholder="Phone number"/>
             <input type="date" name="date" className="input-date" />
             <input type="text" name='n-people' className="input-p"   placeholder='Number of '/>
             <label for='cal'  className="cal" name="cal">{tour.price}<span className='right-align'> X 1 person</span>  </label>
             <label for='service-charge' name="service-charge">Service charges </label>

             </span></div> 
             
            </div>

            <div className="col-md-7 card-container2 p-3 pt-3 pb-3">
<div className='row border'>
  <h4 className='ps-3 pb-3'>Reviews(1 reviews)</h4>
  <span className='text-secondary' size="lg"><HiMiniStar/>
  <HiMiniStar /><HiMiniStar /><HiMiniStar /><HiMiniStar /></span>
  <div className='pt-3 pb-3'><button type="button" className="DocSearch-Button  col-md-6 rounded-pill border-0 shadow-0  rounded btn-outline-info"
aria-label="search">

<span className="DocSearch-Button fs-6 ps-5 pe-5 lead rounded-pill"  aria-expanded="true">share your thoughts </span>
<kbd className="DocSearch-Button-keys btn btn-warning pt-1 pb-1 ps-2 pe-2 m-2 b-0 text-light fs-6 rounded-pill">Submit</kbd>
</button></div>
<div className='col-md-3'></div>
  <div className='col-md-3'></div>
  

</div>

</div>
          </div>
           </div>
        ):(<Loader />)
      }
    </>
  )
}

export default Tour
