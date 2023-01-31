import "./categories.css";
import food from "../../assets/images/foodstuff-img.png";
import packedfood from "../../assets/images/packfood_img.png";
import fruits from "../../assets/images/fruits-img.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <section className="categoires_wrapper mt-3 mb-3  d-lg-block">
      <div className="container">
        <div id="categoires-bg">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-6">
              <h4 className="heading">Categories</h4>
            </div>
            <div className="col-6 col-md-6 col-lg-6 text-right">
              <Link to="/" className="text-uppercase brown-text viewall-btn">
                View All
              </Link>
            </div>
          </div>
          <OwlCarousel>
            <div className="followers-inner">
              <Link to="/listing.html">
                <img src={food} alt="food" />
              </Link>
            </div>

            <div className="followers-inner">
              <Link to="/listing.html">
                <img src={packedfood} alt="packedfood" />
              </Link>
            </div>

            <div className="followers-inner">
              <Link to="/listing.html">
                <img src={fruits} alt="fruits" />
              </Link>
            </div>

            <div className="followers-inner">
              <Link to="/listing.html">
                <img src={packedfood} alt="packed food" />
              </Link>
            </div>

            <div className="followers-inner">
              <Link to="/listing.html">
                <img src={food} alt="food" />
              </Link>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Categories;
