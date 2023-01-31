import refer from "../../assets/images/refer-money.svg";
import list from "../../assets/images/list.svg";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import { Link } from "react-router-dom";
const DesktopCarousel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-3 webhero-view">
          <div className="hero-content text-center">
            <Link to="/">
              <div className="box-outline refer-bg">
                <h6>Refer &amp; Earn</h6>
                <p>Invite a friend now</p>
                <div className="home-list-img">
                  <img src={refer} alt="refer" />
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="box-outline mt-4 list-make-bg">
                <h6>Make a list</h6>
                <p>Shop faster now</p>
                <div className="home-list-img">
                  <img src={list} alt="list" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-12 col-lg-9">
          <div
            id="hero-sliderSlidesOnly"
            className="carousel slide home_slider"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#hero-sliderIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#hero-sliderIndicators" data-slide-to="1"></li>
              <li data-target="#hero-sliderIndicators" data-slide-to="2"></li>
              <li data-target="#hero-sliderIndicators" data-slide-to="3"></li>
              <li data-target="#hero-sliderIndicators" data-slide-to="4"></li>
              <li data-target="#hero-sliderIndicators" data-slide-to="4"></li>
            </ol>

            <OwlCarousel
              items={1}
              margin={0}
              autoplay={true}
              classNameName="owl-theme"
              loop
            >
              <div>
                <img
                  className="d-block w-100"
                  src={slider1}
                  alt="slider1.jpg"
                />
              </div>
              <div>
                <img className="d-block w-100" src={slider2} alt="slider2" />
              </div>
              <div>
                <img className="d-block w-100" src={slider1} alt="slider1" />
              </div>
              <div>
                <img className="d-block w-100" src={slider2} alt="slider2" />
              </div>
              <div>
                <img
                  className="d-block w-100"
                  src={slider1}
                  alt="slider1.jpg"
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopCarousel;
