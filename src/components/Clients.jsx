import React, {  useRef} from "react";
import av1 from "../assets/images/ava-1.jpg";
import av2 from "../assets/images/ava-2.jpg";
import av3 from "../assets/images/ava-3.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Clients = () => {
   
 const settings = {
    dots: true,
    infinite:true,
    speed : 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
 };
  return (
    <div className="container col-xxl-8 px-1 py-1">
      <div className="row flex-lg-row align-items-center g-5 py-5" >
        <div>
          {" "}
          <a href="#" className="btn btn-warning rounded-pill mt-1 mb-1 ps-4 pe-3 text-center">
            Client Love
          </a>
        </div>
        <h4 className="fw-normal text-body-emphasis lh-1 mb-1">
          What our Client say out us{" "}
        </h4>
<Slider {...settings} >
        <div className="col-md-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            repellat inventore odio vitae. Molestiae fugit deleniti mollitia
            ratione! Commodi vitae, excepturi officiis hic
          </p>
          <div className="row">
            <div className="col-md-3">
              <span className="row">
                <img src={av1} className="av1" alt="user" />
              </span>
            </div>
            <div className="col-md-1">
              <span className="row">john Doe</span>
              <span className="row">customer</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            repellat inventore odio vitae. Molestiae fugit deleniti mollitia
            ratione! Commodi vitae, excepturi officiis hic
          </p>
          <div className="row">
            <div className="col-md-3">
              <span className="row">
                <img src={av2} className="av1" alt="user" />
              </span>
            </div>
            <div className="col-md-1">
              <span className="row">john Doe</span>
              <span className="row">customer</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            repellat inventore odio vitae. Molestiae fugit deleniti mollitia
            ratione! Commodi vitae, excepturi officiis hic
          </p>
          <div className="row">
            <div className="col-md-3">
              <span className="row">
                <img src={av3} className="av1" alt="user" />
              </span>
            </div>
            <div className="col-md-1">
              <span className="row">john Doe</span>
              <span className="row">customer</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            repellat inventore odio vitae. Molestiae fugit deleniti mollitia
            ratione! Commodi vitae, excepturi officiis hic
          </p>
          <div className="row">
            <div className="col-md-3">
              <span className="row">
                <img src={av1} className="av1" alt="user" />
              </span>
            </div>
            <div className="col-md-1">
              <span className="row">john Doe</span>
              <span className="row">customer</span>
            </div>
          </div>
        </div>
</Slider>
      </div>
    </div>
  );
};

export default Clients;
