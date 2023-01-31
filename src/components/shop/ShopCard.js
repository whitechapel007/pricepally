import image1 from "../../assets/images/MProducts-img1.png";

import img1 from "../../assets/images/list-img1.jpg";
import img2 from "../../assets/images/list-img2.jpg";
import img3 from "../../assets/images/list-img3.jpg";
import "./shop.css";
import { Link } from "react-router-dom";
const ShopCard = () => {
  return (
    <div>
      <div className="d-flex mobile-product gap-3">
        <div className="justify-content-start">
          <div className="pally-inner">
            <div className="products-img-wrapper  mb-2 pointer">
              <Link to="/">
                <div className="heart-icon">
                  <span className="material-icons">favorite_border</span>
                </div>
                <img className="product-img" src={image1} alt="Product-img1" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" ml-2 justify-content-end">
          <div className="pally-content">
            <Link to="/" classNameName="inner-head">
              <h5 className="mb-2">Titus 20kg (Full Carton) </h5>
            </Link>
            <Link to="/" className="red-bg flex align-items-baseline">
              <span className="material-icons">arrow_upward</span>
              9% | In Season
            </Link>
            <h5 className="mb-2 mt-2 font-weight-bold simhead">
              ₦7,500 <small>per slot (3 available slots)</small>
            </h5>
            <h6 className="mb-2">Time left: 68:50:52</h6>
            <ul className="list-unstyled pallylist-bg mb-2">
              <li className="d-inline-block pally-left">
                <img className="list-img" src={img1} alt="list-img1" />
              </li>
              <li className="d-inline-block pally-left">
                <img className="list-img" src={img3} alt="list-img2" />
              </li>
              <li className="d-inline-block pally-left">
                <img className="list-img" src={img2} alt="list-img3" />
              </li>
              <li className="d-inline-block pally-left">
                <img className="list-img" src={img1} alt="list-img1" />
              </li>
              <li className="d-inline-block">
                <small>2 slots left</small>
              </li>
            </ul>
            <Link to="/">
              <button
                type="button"
                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
              >
                BUY SLOT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
