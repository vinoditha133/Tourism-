import React from 'react'
import subscribe from "../assets/images/male-tourist.png";
const Subscribe = () => {
  return (
    <main className="bg-primary-subtle mt-5">
   

    <div className="b-example-divider"></div>
<div className="container col-xxl-8 px-1 py-1 bg-primary-subtle">
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
  )
}

export default Subscribe
