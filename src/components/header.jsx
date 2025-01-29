import React from "react";
import  HeroImg  from "../image/hero-img.png";
import  category1  from "../image/icon-export-category-1.svg";
import  category2  from "../image/icon-export-category-2.svg";
import  category3  from "../image/icon-export-category-3.svg";

const Header = (props) => {
  return (
    <>
      {/* <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Explore Our Services
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> */}

      <div className="hero bg-section " id="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* <!-- Hero Content Start --> */}
              <div className="hero-content">
                {/* <!-- Section Title Start --> */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">your health our priority</h3>
                  <h1 className="text-anime-style-3" data-cursor="-opaque">Expert medical care you can rely on</h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.</p>
                </div>
                {/* <!-- Section Title End --> */}

                {/* <!-- Hero Buttons Start --> */}
                <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="#services" className="btn btn-custom btn-lg page-scroll btn-default">Explore Our Services</a>
                </div>
                {/* <!-- Hero Buttons End --> */}

              </div>
              {/* <!-- Hero Content End --> */}
            </div>

            <div className="col-lg-6">
              {/* <!-- Hero Image Start --> */}
              <div className="hero-image">
                {/* <!-- Hero Img Start --> */}
                <div className="hero-img">
                  <figure>
                    <img src={HeroImg} alt="" />
                  </figure>
                </div>
                {/* <!-- Hero Img End --> */}

                {/* <!-- Export Category Box Start --> */}
                <div className="export-category-box">
                  {/* <!-- Export Category Item Start --> */}
                  <div className="export-category-item btn-default category-item-1">
                    <div className="icon-box">
                      <img src={category1} alt=""/>
                    </div>
                    <div className="export-category-content">
                      <p>orthopedics</p>
                    </div>
                  </div>
                  {/* <!-- Export Category Item End --> */}

                  {/* <!-- Export Category Item Start --> */}
                  <div className="export-category-item btn-default  category-item-2">
                    <div className="icon-box">
                      <img src={category2} alt="" />
                    </div>
                    <div className="export-category-content">
                      <p>cardiology</p>
                    </div>
                  </div>
                  {/* <!-- Export Category Item End --> */}

                  {/* <!-- Export Category Item Start --> */}
                  <div className="export-category-item btn-default  category-item-3">
                    <div className="icon-box">
                      <img src={category3} alt="" />
                    </div>
                    <div className="export-category-content">
                      <p>neurology</p>
                    </div>
                  </div>
                  {/* <!-- Export Category Item End --> */}
                </div>
                {/* <!-- Export Category Box End --> */}
              </div>
              {/* <!-- Hero Image End --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
