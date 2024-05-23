import React from 'react';
 import gallery1 from "../assets/images/gallery-01.jpg";
 import gallery2 from "../assets/images/gallery-02.jpg";
 import gallery3 from "../assets/images/gallery-03.jpg";
 import gallery4 from "../assets/images/gallery-04.jpg";
 import gallery5 from "../assets/images/gallery-05.jpg";
 import gallery6 from "../assets/images/gallery-06.jpg";
 import gallery7 from "../assets/images/gallery-07.jpg";
 import gallery8 from "../assets/images/gallery-08.jpg";

const Galllery = () => {
  return (
    <div>
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
    </div>
  )
}

export default Galllery
