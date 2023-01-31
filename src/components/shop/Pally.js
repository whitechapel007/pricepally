import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/MProducts-img5.png";
import "./shop.css";
const Pally = () => {
  return (
    <div className="d-flex mobile-product gap-4">
      <div className=" justify-content-start gap-4">
        <div className="pally-inner">
          <div className="products-img-wrapper  mb-2 pointer">
            <Link to="/">
              <div className="heart-icon">
                <span className="material-icons">favorite_border</span>
              </div>
              <img className="product-img" src={image} alt="Product-img1" />
            </Link>
          </div>
        </div>
      </div>
      <div className=" ml-2 justify-content-end">
        <div className="pally-content">
          <Link to="/" className="inner-head">
            <h5 className="mb-2">Titus 20kg (Full Carton) </h5>
          </Link>
          <Link to="/" className="green-bg">
            <span className="material-icons-outlined">arrow_right</span>3% | In
            Season
          </Link>
          <h5 className="mb-2 mt-2 font-weight-bold simhead">
            ₦73,000
            <s>(₦78,000)</s>
          </h5>
          <section className="rating-widget mb-2">
            <div className="rating-main pro-detail-star" data-vote="0">
              <div className="mainstar hidden">
                <span className="full" data-value="0"></span>
                <span className="half" data-value="0"></span>
              </div>
              <div className="star">
                <span className="full" data-value="1"></span>
                <span className="half" data-value="0.5"></span>
                <span className="selected"></span>
              </div>
              <div className="star">
                <span className="full" data-value="2"></span>
                <span className="half" data-value="1.5"></span>
                <span className="selected"></span>
              </div>

              <div className="star">
                <span className="full" data-value="3"></span>
                <span className="half" data-value="2.5"></span>
                <span className="selected"></span>
              </div>

              <div className="star">
                <span className="full" data-value="4"></span>
                <span className="half" data-value="3.5"></span>
                <span className="selected"></span>
              </div>

              <div className="star">
                <span className="full" data-value="5"></span>
                <span className="half" data-value="4.5"></span>
                <span className="selected"></span>
              </div>
            </div>
            <div className="success-box">
              <div className="text-message">(4.5/5.0)</div>
            </div>
          </section>
          <Link to="/">
            <button
              type="button"
              className="brown-btn  text-uppercase btn-effects "
            >
              SELECT ORDER TYPE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pally;
