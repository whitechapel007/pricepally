import "./carousel.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
const Carousel = () => {
  return (
    <div className="col-md-12 col-lg-9">
      <div
        id="hero-sliderSlidesOnly"
        className="carousel slide home_slider"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#hero-sliderSlidesOnly"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#hero-sliderSlidesOnly" data-slide-to="1"></li>
          <li data-target="#hero-sliderSlidesOnly" data-slide-to="2"></li>
          <li data-target="#hero-sliderSlidesOnly" data-slide-to="3"></li>
          <li data-target="#hero-sliderSlidesOnly" data-slide-to="4"></li>
        </ol>
        <OwlCarousel
          items={1}
          margin={0}
          autoplay={true}
          classNameName="owl-theme"
          loop
        >
          <div>
            <img className="d-block w-100" src={slider1} alt="slider1.jpg" />
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
            <img className="d-block w-100" src={slider1} alt="slider1.jpg" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Carousel;
