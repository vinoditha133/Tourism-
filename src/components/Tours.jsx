import React, { useState } from 'react';
import Loader from 'C:/react/react-pro/src/components/Loader.jsx';
import SearchComponents from './SearchComponents';
import Footer from './Footer';
import Subscribe from './Subscribe';
import Galllery from './Galllery';


const Tours = ({}) => {
  const places=[
    {
      "id":"1",
      "title": "Westminister Bridge",
      "city": "London",
      "address": "Somewhere in London",
      "distance": 300,
      "price": 99,
      "maxGroupSize": 10,
      "desc": "this is the description",
      "reviews": [],
      "photo": "/tour-images/tour-img01.jpg",
      "featured": true
    },
    {
      "id":"2",
      "title": "Bali, Indonesia",
      "city": "Bali",
      "address": "Somewhere in Indonesia",
      "distance": 400,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-img02.jpg",
      "featured": true
    },
    { "id":"3",
      "title": "Snowy Mountains, Thailand",
      "city": "Bangkok",
      "address": "Somewhere in Thailand",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img03.jpg",
      "featured": true
    },
    {
      "id":"4",
      "title": "Beautiful Sunrise, Thailand",
      "city": "Phuket",
      "address": "Somewhere in Thailand",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img04.jpg",
      "featured": true
    },
    {
      "id":"5",
      "title": "Nusa Pendia Bali, Indonesia",
      "city": "Bali",
      "address": "Somewhere in Indonesia",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
      "photo": "/tour-images/tour-img05.jpg",
      "featured": true
    },
    {
      "id":"6",
      "title": "Cherry Blossoms Spring",
      "city": "Tokyo",
      "address": "Somewhere in Japan",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/images/tour-img06.jpg",
      "featured": true
    },
    {
      "id":"7",
      "title": "Holmen Lofoten, France",
      "city": "Paris",
      "address": "Somewhere in France",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img07.jpg",
      "featured": true
    },
    {
      "id":"8",
      "title": "Beautiful Snowy Mountains",
      "city": "Bangkok",
      "address": "Somewhere in Thailand",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],

      "photo": "/tour-images/tour-img03.jpg",
      "featured": true
    }
    // {
    //   "id":"9",
    //   "title": "Jaflong, Sylhet",
    //   "city": "Sylhet",
    //   "address": "Somewhere in Sylhet",
    //   "distance": 100,
    //   "price": 99,
    //   "maxGroupSize": 5,
    //   "desc": "this is the description",
    //   "reviews": [],
  
    //   "photo": "/tour-images/tour-img08.jpg",
    //   "featured": false
    // },
    // {
    //   "id":"10",
    //   "title": "Cox's Bazar Sea Beach",
    //   "city": "Chittagong",
    //   "address": "Somewhere in Chittagong",
    //   "distance": 500,
    //   "price": 99,
    //   "maxGroupSize": 8,
    //   "desc": "this is the description",
    //   "reviews": [],
  
    //   "photo": "/tour-images/tour-img09.jpg",
    //   "featured": false
    // }
  ]
  return (
  <>
  {/* bg-image start */}
    <div id="bg-image">  
    <h3>All Tour</h3>
</div>
{/* bg-image start */}


{/* search start */}
<main>
    <div className="b-example-divider"></div>
    <div className="container col-xxl-8 px-1 py-1">
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-md-8 col-sm-6 col-lg-8">

  <SearchComponents />
</div>
</div>
</div>
</main>
{/* search end */}


{/* card start */}
<div className='container'>
  <a href="#" className="btn btn-warning rounded-pill mt-5 ps-4 pe-3 text-center">explore</a><h1>Our feature tours</h1>
  <div className="row">
{places.length > 0 ? (
    
places.map((place,index) =>(
   <>
    <div  className="card img-fluid col-lg-3  col-md-5 col-sm-12 mb-2"> 
       <img className='card img-fluid' key={index} src={place.photo } width="320" height="200" alt={place.title} />
     <div className="card-img pe-30px text-end">
         <h2   className="card-title">{place.city}</h2><span></span>
       <h5  className="card-text1">{place.title}</h5>
       <span>${place.price}/per person</span><a href="#" className="btn btn-warning rounded">Book Now</a>
       </div>
     </div>
     </> 
    ))) :(<Loader />)}
  </div>
  </div>


{/* card end */}
{/* SUBSCRIBE SATART */}
<Subscribe /> 
  {/* SUBSCRIBE end */}
{/* FOOTER START */}
<Footer />
  {/* FOOTER END */}
  

</>
  )
}

export default Tours
