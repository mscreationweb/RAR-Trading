import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

const IntroductionAreaOne = () => {
  return (
    <section id="intro" className="introduction-area pb-130 mt-70 mb-50" > 
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="introduction-img-wrap">
              <img src="/img/AllRAR/1.webp" alt="" />
              <img
                src="/img/AllRAR/about2.webp"
                data-aos="fade-right"
                alt=""
              />

              {/* <Popup
                trigger={
                  <div className="play-btn">
                    <a
                      href="#intro"
                      className="popup-video"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                }
                position=""
                modal={true}
              >
                <Iframe
                  url="https://www.youtube.com/embed/XMWYZ-uZjnQ"
                  width="100%"
                  height="350px"
                  id=""
                  className=""
                  display="block"
                  position="relative"
                />
              </Popup> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="introduction-content">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style2">
                <span className="sub-title">Our Introduction</span>
                <h2 className="title tg-element-title">
                Welcome to RAR
                </h2>
              </div>

              {/* <p className="info-one">
                Lorem ipsum dolor sit amet consectetur suspendisse nulla
                aliquam. Risus rutrum tellus ultrices amet facilisis.
              </p> */}

<p>
             <span style={{fontWeight:'bolder',color:'black'}}> Rukn Al Rolla Trading </span>   is a leading supplier of commercial
and industrial equipment, specializing in battery trading
and electrical devices.

              </p>
              <p>
             <span style={{fontWeight:'bolder',color:'black'}}> Rukn Al Rolla Cleaning Equipment</span>  is a trusted supplier of
high-quality cleaning solutions for commercial, industrial,
and residential applications. 

              </p>
             
{/* 
              <div className="introduction-list">
              <h4 className="title tg-element-title">
              Simplify Your Routine with Sunlight General Trading LLC. Designed for Daily Use
                </h4>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Chemicals

                  </li>
                 
                  <li>
                    <i className="fas fa-check-circle"></i>Dispenser & Paper Products

                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Hygiene & Protective Wears

                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Disposable products

                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Garbage Bins & bags

                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Hotel Amenities

                    </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Vacuum Cleaners

                    </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Stationeries

                    </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Printing Items

                    </li>
                     <li style={{display:'flex'}}>
                    <i className="fas fa-check-circle" ></i>Cleaning Trolleys & Accessories
                  </li>
                </ul>
              </div> */}

              <div className="introduction-bottom mt-20" >
                <Link to="/about" className="btn">
                  Discover MORE
                </Link>

                {/* <span className="call-now">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+97143706261">+971 437 06261</a>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="row justify-content-center" style={{marginTop:'40px'}}>
          <div className="col-xl-6 col-lg-7">
            <div className="section-title-two white-title text-center mb-65 tg-heading-subheading animation-style2">
              {/* <span className="sub-title" style={{color:'blue'}}>What We’re Offering</span> */}
              <h2 className="title tg-element-title" style={{color:'blue'}}>
              All Kind Of Commercial And Industrial Equipment Available In Different Brands

              </h2>
            </div>
          </div>
        </div>
        <div className="shop-item-wrap d-flex justify-content-center align-items-center mx-2 custom-mobile-margin">

      
        <div className="col-lg-10 col-md-6 col-sm-9">
          <div className="col">
            {/* Row 1 */}
            <div className="row">
              <div className="col-6">
                <div className="shop-thumb">
                  <Link>
                    <img src="img/AllRAR/commercial/1.webp" alt="" className="img-fluid" />
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-thumb">
                  <Link>
                    <img src="img/AllRAR/commercial/2.webp" alt="" className="img-fluid" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="row mt-3">
              <div className="col-6">
                <div className="shop-thumb">
                  <Link>
                    <img src="img/AllRAR/commercial/3.webp" alt="" className="img-fluid" />
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-thumb">
                  <Link>
                    <img src="img/AllRAR/commercial/4.webp" alt="" className="img-fluid" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Row 3 - Added 5 & 6 */}
            <div className="row mt-3">
              <div className="col-3">
                <div className="shop-thumb">
                  <Link>
                    <img src="img/AllRAR/commercial/5.webp" alt="" className="img-fluid" />
                  </Link>
                </div>
              </div>
              <div className="col-3">
                <div className="shop-thumb">
                  <Link>
                    <img src="img/AllRAR/commercial/6.webp" alt="" className="img-fluid" />
                  </Link>
                </div>
              </div>
              <div className="col-3">
                <div className="shop-thumb">
                  <Link>
                    <img src="img/AllRAR/commercial/7.webp" alt="" className="img-fluid" />
                  </Link>
                </div>
              </div>
              <div className="col-3">
                <div className="shop-thumb">
                  <Link>
                    <img src="img/AllRAR/commercial/8.webp" alt="" className="img-fluid" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Row 4 - Added 7 & 8 */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionAreaOne;
