import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/MPre-order1.png";
const Recommended = () => {
  return (
    <div>
      <div className="d-flex mobile-product gap-4">
        <div className=" justify-content-start">
          <div className="pally-inner">
            <div className="products-img-wrapper  mb-2 pointer">
              <Link to="/">
                <div className="heart-icon">
                  <span className="material-icons">favorite_border</span>
                </div>
                <img
                  className="mb-3 product-img"
                  src={image}
                  alt="Pre-order1"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className=" ml-2 justify-content-end">
          <div className="pally-content">
            <Link to="/" className="inner-head">
              <h5 className="mb-2">Strawberries</h5>
            </Link>
            <Link to="/" className="red-bg">
              <span className="material-icons-outlined">arrow_right_alt</span>9%
              | In Season
            </Link>
            <h6 className="mb-2 mt-2 font-weight-bold simhead">
              ₦7,500 per kg
            </h6>
            <p className="text-red mb-2">1kg of 50kg left</p>
            <div className="preorder-progress stat-bar mb-2">
              <span className="stat-bar-rating">80%</span>
            </div>
            <p className="mb-2 dgrey-clr">Delivery Date: July 23rd 2021</p>
            <Link to="/">
              <button
                type="button"
                className="brown-btn  text-uppercase btn-effects "
                data-toggle="modal"
                data-target="#booknowModal"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
