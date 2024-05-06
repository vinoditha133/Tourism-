import React, { useEffect, useState } from 'react'
import imagehero1 from "../assets/images/hero-img01.jpg"
import imagehero2 from "../assets/images/hero-img02.jpg"
import video from "../assets/images/p.mp4";
//import VedioComp from './VedioComp';
import "bootstrap/dist/css/bootstrap.min.css";
import world from "../assets/images/world.png";
import icon1 from "../assets/images/weather.png";
import icon2 from "../assets/images/guide.png";
import icon3 from "../assets/images/customization.png";
import image1 from "../assets/images/tour-img01.jpg";
import subscribe from "../assets/images/male-tourist.png";
import { Link } from 'react-router-dom';
 import expirience from "../assets/images/experience.png"
 import gallery1 from "../assets/images/gallery-01.jpg";
 import gallery2 from "../assets/images/gallery-02.jpg";
 import gallery3 from "../assets/images/gallery-03.jpg";
 import gallery4 from "../assets/images/gallery-04.jpg";
 import gallery5 from "../assets/images/gallery-05.jpg";
 import gallery6 from "../assets/images/gallery-06.jpg";
 import gallery7 from "../assets/images/gallery-07.jpg";
 import gallery8 from "../assets/images/gallery-08.jpg";
 import av1 from "../assets/images/ava-1.jpg";
 import av2 from "../assets/images/ava-2.jpg";
 import av3 from "../assets/images/ava-3.jpg";
import SearchComponents from './SearchComponents';
import { IoLocation } from "react-icons/io5";
import { FaPhoneSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { HiMiniHomeModern } from 'react-icons/hi2';
import Loader from './Loader';
import {Link} from 'react-router-dom';
const Home = () => {
    // const places=[
    //     {
    //       "id":"1",
    //       "title": "Westminister Bridge",
    //       "city": "London",
    //       "address": "Somewhere in London",
    //       "distance": 300,
    //       "price": 99,
    //       "maxGroupSize": 10,
    //       "desc": "this is the description",
    //       "reviews": [],
    //       "photo": "/tour-images/tour-img01.jpg",
    //       "featured": true
    //     },
    //     {
    //       "id":"2",
    //       "title": "Bali, Indonesia",
    //       "city": "Bali",
    //       "address": "Somewhere in Indonesia",
    //       "distance": 400,
    //       "price": 99,
    //       "maxGroupSize": 8,
    //       "desc": "this is the description",
    //       "reviews": [],
      
    //       "photo": "/tour-images/tour-img02.jpg",
    //       "featured": true
    //     },
    //     { "id":"3",
    //       "title": "Snowy Mountains, Thailand",
    //       "city": "Bangkok",
    //       "address": "Somewhere in Thailand",
    //       "distance": 500,
    //       "price": 99,
    //       "maxGroupSize": 8,
    //       "desc": "this is the description",
    //       "reviews": [],
      
    //       "photo": "/tour-images/tour-img03.jpg",
    //       "featured": true
    //     },
    //     {
    //       "id":"4",
    //       "title": "Beautiful Sunrise, Thailand",
    //       "city": "Phuket",
    //       "address": "Somewhere in Thailand",
    //       "distance": 500,
    //       "price": 99,
    //       "maxGroupSize": 8,
    //       "desc": "this is the description",
    //       "reviews": [],
      
    //       "photo": "/tour-images/tour-img04.jpg",
    //       "featured": true
    //     },
    //     {
    //       "id":"5",
    //       "title": "Nusa Pendia Bali, Indonesia",
    //       "city": "Bali",
    //       "address": "Somewhere in Indonesia",
    //       "distance": 500,
    //       "price": 99,
    //       "maxGroupSize": 8,
    //       "desc": "this is the description",
    //       "reviews": [],
    //       "photo": "/tour-images/tour-img05.jpg",
    //       "featured": true
    //     },
    //     {
    //       "id":"6",
    //       "title": "Cherry Blossoms Spring",
    //       "city": "Tokyo",
    //       "address": "Somewhere in Japan",
    //       "distance": 500,
    //       "price": 99,
    //       "maxGroupSize": 8,
    //       "desc": "this is the description",
    //       "reviews": [],
      
    //       "photo": "/tour-images/tour-img06.jpg",
    //       "featured": true
    //     },
    //     {
    //       "id":"7",
    //       "title": "Holmen Lofoten, France",
    //       "city": "Paris",
    //       "address": "Somewhere in France",
    //       "distance": 500,
    //       "price": 99,
    //       "maxGroupSize": 8,
    //       "desc": "this is the description",
    //       "reviews": [],
      
    //       "photo": "/tour-images/tour-img07.jpg",
    //       "featured": true
    //     },
    //     {
    //       "id":"8",
    //       "title": "Beautiful Snowy Mountains",
    //       "city": "Bangkok",
    //       "address": "Somewhere in Thailand",
    //       "distance": 500,
    //       "price": 99,
    //       "maxGroupSize": 8,
    //       "desc": "this is the description",
    //       "reviews": [],

    //       "photo": "/tour-images/tour-img03.jpg",
    //       "featured": true
    //     }
    //     // {
    //     //   "id":"9",
    //     //   "title": "Jaflong, Sylhet",
    //     //   "city": "Sylhet",
    //     //   "address": "Somewhere in Sylhet",
    //     //   "distance": 100,
    //     //   "price": 99,
    //     //   "maxGroupSize": 5,
    //     //   "desc": "this is the description",
    //     //   "reviews": [],
      
    //     //   "photo": "/tour-images/tour-img08.jpg",
    //     //   "featured": false
    //     // },
    //     // {
    //     //   "id":"10",
    //     //   "title": "Cox's Bazar Sea Beach",
    //     //   "city": "Chittagong",
    //     //   "address": "Somewhere in Chittagong",
    //     //   "distance": 500,
    //     //   "price": 99,
    //     //   "maxGroupSize": 8,
    //     //   "desc": "this is the description",
    //     //   "reviews": [],
      
    //     //   "photo": "/tour-images/tour-img09.jpg",
    //     //   "featured": false
    //     // }
    //   ]
    const vedio='../assets/images/hero-vedio.mp4';
const [data, setData]=useState([]);
const [pageNumber, setPageNumber]=useState(0);

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
    <div className='continer home'>
        {/* hero Page */}
        <div className='container'>
      <div className='row'>
        
<div className='col-md-6'>
    <a href="#" className="btn btn-warning rounded-pill mt-5 ps-4 pe-3 text-center">Know before you go<span><img  className="world-image" src={world} alt='user'/></span></a>
   <h1>Traveling opens the doors to creating memories</h1>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repellat inventore odio vitae. Molestiae fugit deleniti mollitia ratione! Commodi vitae, excepturi officiis hic facere libero nisi quam amet nesciunt illum!</p>
    </div>
 
  <div className='col-md-6 '>
        <div className='row '>
<div className='col-md-2 col1'><img className="heroi1" src={imagehero1} alt='hero-image1'/></div>
<div className='col-md-2 col2 rounded'><video className="heroi2" src={video} controls /></div>
<div className='col-md-2 col3'><img className="heroi1" src={imagehero2} alt='hero-image1'/></div>
</div>
</div>
      </div>
    </div>
    {/* hero Page end */}

{/* search box start */}

<main>
    <div className="b-example-divider"></div>
    <div className="container col-xxl-8 px-1 py-1">
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-md-8 col-sm-6 col-lg-8">
<SearchComponents />
</div></div></div>
</main>
  
{/* search box start */}

    {/* DETAIL LIST START */}
    <div className="row">
    <div className="col-lg-2 text-center pt-5 my-5">
   <span className='color-p color'>What we offer</span>
      <h2 className="fw-normal">We offer our best services</h2>
      
    </div>
    <div className="col-lg-3 text-center pt-5  my-5 border-p">
      <span><img  className="icon1" src={icon1} alt='user'/></span>
      <h2 className="fw-normal">CAlculate weather</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repellat inventore odio vitae. Molestiae fugit deleniti mollitia ratione! Commodi vitae, excepturi officiis hic</p>

    </div>
    <div className="col-lg-3 text-center pt-5  my-5 border-p">
    <img src={icon2} className="img-fluid icon2" alt="icon1"/>
      <h2 className="fw-normal">Best Tour Guide</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repellat inventore odio vitae. Molestiae fugit deleniti mollitia ratione! Commodi vitae, excepturi officiis hic</p>

    </div>
    <div className="col-lg-3 text-center pt-5 my-5 border-p">
    <img  src={icon3}  className="img-fluid icon3" alt="icon1"/>
      <h2 className="fw-normal">Customization</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repellat inventore odio vitae. Molestiae fugit deleniti mollitia ratione! Commodi vitae, excepturi officiis hic</p>

    </div>
  </div>
  {/* DETAIL LIST START */}

{/* experience start here */}
<main className="bg-primary-subtle">
    <div className="b-example-divider"></div>
    <div className="container col-xxl-8 px-1 py-1">
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-md-6 col-sm-8 col-lg-6">
        <a href="#" className="btn btn-warning rounded-pill mt-5 mb-4 ps-4 pe-3 text-center">experience</a>
          <h6 className="display-5 fw-normal text-body-emphasis lh-1 mb-3">with our all expirience we will serve you </h6>
          <p className="text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repellat inventore odio vitae. Molestiae fugit deleniti mollitia ratione! Commodi vitae, excepturi officiis hic</p>
          <div className='row'>  
         <div className='col-md-2 '>
        <div className='me-4 ms-2 p-4 pe-4 text-left bg-warning rounded'> 12k+</div>
          <span>Successfull Trips</span>
          </div>
          
          <div className='col-md-2'>
    <div className='me-4 ms-4 p-4 pe-4 text-left bg-warning rounded'> 2k+</div>
          <span>Regular client</span>
          </div>
           
          <div className='col-md-2'>
          <div className='me-4  ms-4 p-4 pe-4 text-left bg-warning rounded'> 15</div>
          <span>Years of expirience</span>
          </div>
          
        </div>
          </div>
          
       <div className="col-md-5">
         <img src={expirience} width="400" height="450" alt="loading"/>
          </div>

      </div>
    </div>
  </main>
{/* experience start here */}
{/* gallery start here */}
<div className='container'>
      <div className='row'>
        <div>
      <a href="#" className="btn btn-warning rounded-pill mt-5 me-5 ps-4 pe-3 text-center">Gallery</a>
      </div><h1 className='fw-bold mt-5 mb-3'>Visit our customers tour gallery</h1>
<div className='col-md-3 col-sm-3 col-lg-3'>
  <div className='row '><img className='g1' src={gallery1} alt='galllery' width="200" height="250" /></div>
  <div className='row '><img className='g1' src={gallery5} alt='galllery' width="200" height="450" /></div>
   </div>
   <div className='col-md-3 col-sm-3 col-lg-3'>
  <div className='row '><img className='g1' src={gallery2} alt='galllery' width="200" height="230" /></div>
  <div className='row '><img className='g1' src={gallery6} alt='galllery' width="200" height="230" /></div>
   </div>
   <div className='col-md-3 col-sm-3 col-lg-3'>
  <div className='row '><img className='g1' src={gallery3} alt='galllery' width="200" height="280" /></div>
  <div className='row '><img className='g1' src={gallery7} alt='galllery' width="200" height="380" /></div>
   </div>
   <div className='col-md-3 col-sm-3 col-lg-3'>
  <div className='row '><img className='g1' src={gallery4} alt='galllery' width="200" height="200" /></div>
  <div className='row '><img className='g1' src={gallery8} alt='galllery' width="200" height="350" /></div>
   </div>
   </div>
   </div>
   {/* gallery start here */}

   {/* Clients Love  start*/}
   <div className="container col-xxl-8 px-1 py-1">
      <div className="row flex-lg-row align-items-center g-5 py-5">
      <div> <a href="#" className="btn btn-warning rounded-pill mt-1 mb-1 ps-4 pe-3 text-center">Client Love</a></div>
          <h4 className="fw-normal text-body-emphasis lh-1 mb-1">What our Client say out us </h4>

          <div className="col-md-6 col-sm-8 col-lg-4">
<p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repellat inventore odio vitae. Molestiae fugit deleniti mollitia ratione! Commodi vitae, excepturi officiis hic</p>
<div className='row'>
              <div className='col-md-3'>
               <span className='row'>
              <img src={av1} className='av1' alt='user'/>
              </span> 
              </div>
              <div className='col-md-1'>
                <span className='row'>john Doe</span>  
                <span className='row'>customer</span> 
          </div>
          </div>
          </div>

          <div className="col-md-6 col-sm-8 col-lg-4">
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repellat inventore odio vitae. Molestiae fugit deleniti mollitia ratione! Commodi vitae, excepturi officiis hic</p>
            <div className='row'>
              <div className='col-md-3'>
               <span className='row'>
              <img src={av2} className='av1' alt='user'/>
              </span> 
              </div>
              <div className='col-md-1'>
                <span className='row'>john Doe</span>  
                <span className='row'>customer</span> 
          </div>
          </div>
          </div>
          <div className="col-md-6 col-sm-8 col-lg-4">
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repellat inventore odio vitae. Molestiae fugit deleniti mollitia ratione! Commodi vitae, excepturi officiis hic</p>
            <div className='row'>
              <div className='col-md-3'>
               <span className='row'>
              <img src={av3} className='av1' alt='user'/>
              </span> 
              </div>
              <div className='col-md-1'>
                <span className='row'>john Doe</span>  
                <span className='row'>customer</span> 
          </div>
          </div>
          </div>
          </div>
          </div>
          
   {/* Clients Love  start*/}

  {/* Our Features start here */}
  <div className='container'>
  <a href="#" className="btn btn-warning rounded-pill mt-5 me-5 ps-4 pe-3 text-center">explore</a><h1 className='mt-5'>Our feature tours</h1>
  <div className="row ">
    {/* Features card start here */}
    {data.length ? (<div className='row'>
                    
{data.map((place,index) => (
   <div key={index}>
    <div  className="card img-fluid col-md-3 mb-2"> 
<Link to={`/tours/${place.id}`}>
    <div className='card my-2'>
       <img className="card-img" src={place.photo} width="300" height="200" alt={place.title} />
     <div className="card-img pe-30px text-end">
         <h2 className="card-title">{place.city}</h2><span></span>
       <h5  className="card-text1">{place.title}</h5>
       <span>${place.price}/per person</span><a href="#" className="btn btn-warning rounded">Book Now</a>
       </div>
     </div>
     </Link>
     </div> 
     </div>
    ))}
    </div>):(<Loader/>) }
  </div>
  </div>
  {
    [1,2].map((num)=>(
        <button className='btn btn-warning btn-rad rouded-pill ms-1' onClick={()=>handleClick(num)}>{num}</button>
    ))
}
  
  
   {/* Our Features end here */}

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
  {/* footer start*/}

  <div className="row">
    <div className="col-lg-3 text-align-center p-5 my-5">

      <h2 className="fw-normal"><HiMiniHomeModern />
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
        <li className='card-style2'><FaPhoneSquare/><a href="#" className="card-link text-dark text-decoration-none " target="_blank">
            Phone: +91 9380850133</a></li>
         <li className='card-style3'><HiOutlineMail /><a href="#" className="card-link text-dark text-decoration-none " target="_blank">email: vinodithahm1997@gmail.com</a></li>
        {/*<li><a href="#" class="card-link text-secondary text-decoration-none list-style-none" target="_blank">Rubber
            made Toy</a></li> */}

      </ul>
    </div>

  </div>
    </div> 
  )
}

export default Home
