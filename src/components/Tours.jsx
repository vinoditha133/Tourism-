import React, { useState } from 'react'
import image1 from "../assets/images/tour-img01.jpg"
 import image from "../assets/images/tour-img02.jpg";
 import { Link } from 'react-router-dom';
import Loader from 'C:/react/react-pro/src/components/Loader.jsx';
import subscribe from "../assets/images/male-tourist.png";
import { IoLocation } from 'react-icons/io5';
import { FaPhoneSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiMiniHomeModern } from "react-icons/hi2";
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
  
      "photo": "/tour-images/tour-img02.jpg",
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
<div>
</div>
{/* search end */}


{/* card start */}
<div className='container'>
  <a href="#" className="btn btn-warning rounded-pill mt-5 ps-4 pe-3 text-center">explore</a><h1>Our feature tours</h1>
  <div className="row">
{places.length > 0 ? (
    
places.map((place,index) =>(
   <>
    <div  className="card img-fluid col-lg-3  col-md-5 col-sm-12 mb-2"> 
       <img className='card img-fluid' key={index} src={place.photo} width="320" height="200" alt={place.title} />
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
<main className="bg-primary-subtle mt-5">
   

    <div className="b-example-divider"></div>

    <div className="container col-xxl-8 px-1 py-1">
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-md-7 col-sm-8 col-lg-7">
          <h6 className="display-5 fw-normal text-body-emphasis lh-1 mb-3">Subscribe now for usefull travelling  information</h6>
          <div className='row'>          
            <div className="d-grid gap-2 d-md-flex justify-content-md-center row input-group">

<button type="button" className="DocSearch-Button border-0 shadow-0  rounded btn-outline-info"
  aria-label="search">

  <span className="DocSearch-Button fs-6 ps-2 pe-2 lead" aria-expanded="true">Enter Your email </span>
  <kbd className="DocSearch-Button-keys btn btn-warning pt-1 pb-1 ps-2 pe-2 m-2 b-0 text-light fs-6">Subscribe</kbd>
</button>

          <p className="text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repellat inventore odio vitae. Molestiae fugit deleniti mollitia ratione! Commodi vitae, excepturi officiis hic</p>
          </div>
        </div>
       </div>
       <div className="col-md-5">
         <img src={subscribe} width="500" height="330" alt="loading"/>
          </div>
      </div>
    </div>
  </main>
  {/* SUBSCRIBE end */}
{/* FOOTER START */}
<div className="row">
    <div className="col-lg-3 text-align-center p-5 my-5">

      <h2 className="fw-normal"><HiMiniHomeModern/>
      </h2> 
      <p className="text-dark">Some representative  content .</p>

    </div>
  
    <div class="col-lg-3 text-align-center p-5 my-5">

      <h2 class="fw-normal">Discover</h2>
      <ul class="listing">
        <li><Link to="/home" class="card-link text-dark text-decoration-none" target="_blank">Home</Link></li>

        <li><Link to="/home"class="card-link text-dark text-decoration-none list-style-none" target="_blank"> 
        About</Link></li>
        <li><Link to="/tours" class="card-link text-dark text-decoration-none list-style-none" target="_blank">Man
            Tour</Link></li>
       
      </ul>
</div>
      <div className="col-lg-3 text-align-center p-5 my-5">

<h2 className="fw-normal">Quick Link</h2>
<ul className="list-style-none">
  <li><Link to="/" class="card-link text-dark text-decoration-none list-style-none"
      target="_blank">Gallery</Link></li>
  <li><Link to="/login" class="card-link text-dark text-decoration-none list-style-none"
      target="_blank">Login</Link></li>
  <li><Link to="register" class="card-link text-dark text-decoration-none list-style-none"
      target="_blank">Register</Link></li>
  
</ul>

</div>

    
    <div class="col-lg-3 text-align-center p-5 my-5">

      <h2 class="fw-normal">Contact</h2>
      <ul class="list-style-none">
        <li className='card-style1'><IoLocation /><a href="#" className="card-link text-dark text-decoration-none" target="_blank">
            Address: Hethur, Sakleshpura, Hassan</a></li>
        <li className='card-style2'><FaPhoneSquare /><a href="#" className="card-link text-dark text-decoration-none " target="_blank">
            Phone: +91 9380850133</a></li>
         <li className='card-style3'><HiOutlineMail /><a href="#" className="card-link text-dark text-decoration-none " target="_blank">email: vinodithahm1997@gmail.com</a></li>
        {/*<li><a href="#" class="card-link text-secondary text-decoration-none list-style-none" target="_blank">Rubber
            made Toy</a></li> */}

      </ul>
    </div>

  </div>
  {/* FOOTER END */}
</>
  )
}

export default Tours
