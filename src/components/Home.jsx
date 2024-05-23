import React from "react";
import imagehero1 from "../assets/images/hero-img01.jpg";
import imagehero2 from "../assets/images/hero-img02.jpg";
import video from "../assets/images/p.mp4"; 
import "bootstrap/dist/css/bootstrap.min.css";
import world from "../assets/images/world.png";
import icon1 from "../assets/images/weather.png";
import icon2 from "../assets/images/guide.png";
import icon3 from "../assets/images/customization.png";
import SearchComponents from "./SearchComponents";
import Galllery from "./Galllery";
import Clients from "./Clients";
import Features from "./Features";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Experience from "./Experience";

const Home = () => {
  return (
    <div className="continer home">
      {/* hero Page */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a href="#" className="btn btn-warning rounded-pill mt-5 ps-4 pe-3 text-center">
              Know before you go
              <span>
                <img className="world-image" src={world} alt="user" />
              </span>
            </a>
            <h1>Traveling opens the doors to creating memories</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              repellat inventore odio vitae. Molestiae fugit deleniti mollitia
              ratione! Commodi vitae, excepturi officiis hic facere libero nisi
              quam amet nesciunt illum!
            </p>
          </div>
          <div className="col-md-6 ">
            <div className="row ">
              <div className="col-md-2 col1">
                <img className="heroi1" src={imagehero1} alt="hero-image1" />
              </div>
              <div className="col-md-2 col2 rounded">
                <video className="heroi2" src={video} controls />
              </div>
              <div className="col-md-2 col3">
                <img className="heroi1" src={imagehero2} alt="hero-image1" />
              </div>
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
            </div>
          </div>
        </div>
      </main>
      {/* search box start */}

      {/* DETAIL LIST START */}
      <div className="row">
        <div className="col-lg-2 text-center pt-5 my-5">
          <span className="color-p color">What we offer</span>
          <h2 className="fw-normal">We offer our best services</h2>
        </div>
        <div className="col-lg-3 text-center pt-5  my-5 border-p">
          <span>
            <img className="icon1" src={icon1} alt="user" />
          </span>
          <h2 className="fw-normal">CAlculate weather</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            repellat inventore odio vitae. Molestiae fugit deleniti mollitia
            ratione! Commodi vitae, excepturi officiis hic
          </p>
        </div>
        <div className="col-lg-3 text-center pt-5  my-5 border-p">
          <img src={icon2} className="img-fluid icon2" alt="icon1" />
          <h2 className="fw-normal">Best Tour Guide</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            repellat inventore odio vitae. Molestiae fugit deleniti mollitia
            ratione! Commodi vitae, excepturi officiis hic
          </p>
        </div>
        <div className="col-lg-3 text-center pt-5 my-5 border-p">
          <img src={icon3} className="img-fluid icon3" alt="icon1" />
          <h2 className="fw-normal">Customization</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            repellat inventore odio vitae. Molestiae fugit deleniti mollitia
            ratione! Commodi vitae, excepturi officiis hic
          </p>
        </div>
      </div>
      {/* DETAIL LIST START */}

      {/* experience start here */}
      <Experience />
      {/* experience start here */}
      {/* gallery start here */}
      <Galllery />
      {/* gallery start here */}

      {/* Clients Love  start*/}
      <Clients />
      {/* Clients Love  start*/}

      {/* Our Features start here */}
      <Features />
      {/* Our Features end here */}

      {/* SUBSCRIBE SATART */}
      <Subscribe />
      {/* SUBSCRIBE end */}

      {/* footer start*/}
      <Footer />
      {/* footer end */}

      {/* copyright content start*/}
      <div className="row text-center"></div>
      {/* copyright content end*/}
    </div>
  );
};

export default Home;
