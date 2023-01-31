import image1 from "../../assets/images/Product-img1.jpg";
import image2 from "../../assets/images/list-img1.jpg";
import image3 from "../../assets/images/list-img3.jpg";
import product2 from "../../assets/images/Product-img2.png";
import product3 from "../../assets/images/Product-img3.png";
import product4 from "../../assets/images/Product-img4.png";
import product5 from "../../assets/images/Product-img5.png";
import preorder from "../../assets/images/Pre-order1.png";

import image12 from "../../assets/images/Product-img12.png";
import { Link } from "react-router-dom";
const TimeLine = () => {
  return (
    <section className="food-items-bg  d-none d-lg-block webfoodTab-view">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-5">
            <ul className="nav nav-tabs foodtabs" id="foodTab" role="tablist">
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  id=""
                  data-toggle="tab"
                  to="/pally"
                  role="tab"
                  aria-controls="pally"
                  aria-selected="true"
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="recommended-tab"
                  data-toggle="tab"
                  to="/recommended"
                  role="tab"
                  aria-controls="recommended"
                  aria-selected="false"
                >
                  Pally
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="pre-orders-tab"
                  data-toggle="tab"
                  to="/pre-orders"
                  role="tab"
                  aria-controls="pre-orders"
                  aria-selected="false"
                >
                  Recommended
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-7">
            <form className="d-flex gap-3">
              <div className="form-control">
                <select>
                  <option>Categories</option>
                  <option>Soup &amp; stew ingredients</option>
                  <option>Foodstuffs</option>
                  <option>Meat, Poultry &amp; Seafood</option>
                </select>
              </div>
              <div className="form-control">
                <select>
                  <option>Sub Categories</option>
                  <option>Grains</option>
                  <option>Tubers &amp; Roots</option>
                </select>
              </div>
              <div className="form-group mb-0">
                <select className="form-control">
                  <option>Sort By: Price (Low to High)</option>
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <hr className="border-bottom" />
        <div className="row ">
          <div className="col-lg-12">
            <div className="tab-content main" id="foodTabContent">
              <div
                className="tab-pane fade active show"
                id="pally"
                role="tabpanel"
                aria-labelledby="pally-tab"
              >
                <h6 className="inner-head">16 Available Deals</h6>
                <div className="">
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner ">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/roduct_detail.html">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className=" product-img mb-3"
                              src={image1}
                              alt="Product-img1"
                            />
                          </Link>
                        </div>

                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">Titus 20kg (Full Carton) </h5>
                          </Link>
                          <Link to="/" className="red-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            9% | <span className="clr-gr">In Season</span>
                          </Link>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦7,500{" "}
                            <small>
                              per slot (slot size per person goes here)
                            </small>
                          </h5>
                          <h6 className="mb-2">Time left: 68:50:52</h6>
                          <ul className="list-unstyled pallylist-bg mb-2">
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image1}
                                alt="list-img1"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image2}
                                alt="list-img2"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image3}
                                alt="list-img3"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image1}
                                alt="list-img1"
                              />
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
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner ">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={product2}
                              alt="Product-img1"
                            />
                          </Link>
                        </div>

                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">
                              Croaker Fish (Full Carton){" "}
                            </h5>
                          </Link>
                          <Link to="/" className="red-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            9% | In Season
                          </Link>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦7,500{" "}
                            <small>
                              per slot (slot size per person goes here)
                            </small>
                          </h5>
                          <h6 className="mb-2">Time left: 68:50:52</h6>
                          <ul className="list-unstyled pallylist-bg mb-2">
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={product2}
                                alt="list-img1"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image2}
                                alt="list-img2"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image1}
                                alt="list-img3"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image1}
                                alt="list-img1"
                              />
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
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={product3}
                              alt="Product-img1"
                            />
                          </Link>
                        </div>

                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">White Onions (40kg)</h5>
                          </Link>
                          <Link to="/" className="red-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            9% | In Season
                          </Link>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦7,500{" "}
                            <small>
                              per slot (slot size per person goes here)
                            </small>
                          </h5>
                          <h6 className="mb-2">Time left: 68:50:52</h6>
                          <ul className="list-unstyled pallylist-bg mb-2">
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image1}
                                alt="list-img1"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image2}
                                alt="list-img2"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image3}
                                alt="list-img3"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image1}
                                alt="list-img1"
                              />
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
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={product4}
                              alt="Product-img1"
                            />
                          </Link>
                        </div>

                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">Guinea Corn Red (Paint... </h5>
                          </Link>
                          <Link to="/" className="red-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            9% | In Season
                          </Link>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦7,500{" "}
                            <small>
                              per slot (slot size per person goes here)
                            </small>
                          </h5>
                          <h6 className="mb-2">Time left: 68:50:52</h6>
                          <ul className="list-unstyled pallylist-bg mb-2">
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image1}
                                alt="list-img1"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image2}
                                alt="list-img2"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image3}
                                alt="list-img3"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image1}
                                alt="list-img1"
                              />
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
                              Buy slot
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={image12}
                              alt="Product-img1"
                            />
                          </Link>
                        </div>

                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">
                              Plantain Big Unripe (Stem of{" "}
                            </h5>
                          </Link>
                          <Link to="/" className="red-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            9% | In Season
                          </Link>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦7,500{" "}
                            <small>
                              per slot (slot size per person goes here)
                            </small>
                          </h5>
                          <h6 className="mb-2">Time left: 68:50:52</h6>
                          <ul className="list-unstyled pallylist-bg mb-2">
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image1}
                                alt="list-img1"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image2}
                                alt="list-img2"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image3}
                                alt="list-img3"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src={image1}
                                alt="list-img1"
                              />
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
                              Buy Slot
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade recommended-bg"
                id="recommended"
                role="tabpanel"
                aria-labelledby="recommended-tab"
              >
                <h6 className="inner-head mb-3 mt-3">16 Available Deals</h6>
                <div className="">
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner ">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={product5}
                              alt="Product-img1"
                            />
                          </Link>
                        </div>

                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">Irish Potato (5kg) </h5>
                          </Link>
                          <Link to="/" className="green-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            3% | <span className="clr-red">Off Season</span>
                          </Link>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦73,000
                            <s>(₦78,000)</s>
                          </h5>
                          <section className="rating-widget">
                            <div className="no-ratings">
                              <p>No ratings yet</p>
                            </div>
                            <div
                              className="rating-main pro-detail-star"
                              data-vote="0"
                            >
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
                              <div className="text-message"></div>
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

                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={product5}
                              alt="Product-img1"
                            />
                          </Link>
                        </div>
                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">Soya Beans (Paint Bucket) </h5>
                          </Link>
                          <Link to="/" className="green-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            3% | In Season
                          </Link>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦73,000
                            <s>(₦78,000)</s>
                          </h5>
                          <section className="rating-widget ">
                            <div
                              className="rating-main pro-detail-star"
                              data-vote="0"
                            >
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
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={product2}
                              alt="Product-img1"
                            />
                          </Link>
                        </div>
                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">Tuwo Rice (50kg)</h5>
                          </Link>
                          <Link to="/" className="green-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            3% | In Season
                          </Link>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦73,000
                            <s>(₦78,000)</s>
                          </h5>
                          <section className="rating-widget">
                            <div
                              className="rating-main pro-detail-star"
                              data-vote="0"
                            >
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
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={product5}
                              alt="Product-img1"
                            />
                          </Link>
                        </div>

                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">
                              Beans Oloyin - original (100kg){" "}
                            </h5>
                          </Link>
                          <Link to="/" className="green-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            3% | In Season
                          </Link>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦73,000
                            <s>(₦78,000)</s>
                          </h5>
                          <section className="rating-widget">
                            <div
                              className="rating-main pro-detail-star"
                              data-vote="0"
                            >
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
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={product4}
                              alt="Product-img1"
                            />
                          </Link>
                        </div>

                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">Irish Potato (5kg) </h5>
                          </Link>
                          <Link to="/" className="green-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            3% | In Season
                          </Link>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦73,000
                            <s>(₦78,000)</s>
                          </h5>
                          <section className="rating-widget">
                            <div
                              className="rating-main pro-detail-star"
                              data-vote="0"
                            >
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
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={image1}
                              alt="Product-img1"
                            />
                          </Link>
                        </div>

                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">
                              Plantain Big Unripe (Stem of{" "}
                            </h5>
                          </Link>
                          <Link to="/" className="green-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            3% | In Season
                          </Link>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦73,000
                            <s>(₦78,000)</s>
                          </h5>
                          <section className="rating-widget">
                            <div
                              className="rating-main pro-detail-star"
                              data-vote="0"
                            >
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
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade preorder-bg"
                id="pre-orders"
                role="tabpanel"
                aria-labelledby="pre-orders-tab"
              >
                <h6 className="inner-head mb-3 mt-3">3 Available Deals</h6>
                <div className="">
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={preorder}
                              alt="Pre-order1"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <Link to="/">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src={preorder}
                              alt="Product-img3"
                            />
                          </Link>
                        </div>
                        <div className="pally-content">
                          <Link to="/" className="inner-head">
                            <h5 className="mb-2">Strawberries</h5>
                          </Link>
                          <Link to="/" className="red-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            9% | In Season
                          </Link>
                          <h6
                            className="mb-2 mt-2
                                                     font-weight-bold simhead"
                          >
                            ₦7,500 per kg
                          </h6>
                          <p className="text-red mb-2 text-uppercase">Closed</p>
                          <div className="preorder-progress stat-bar mb-2">
                            <span className="stat-bar-rating">100%</span>
                          </div>
                          <p className="mb-2 dgrey-clr">
                            Delivery Date: July 23rd 2021
                          </p>
                          <Link to="/" className="closed-opacity">
                            <button
                              type="button"
                              className="brown-btn  text-uppercase btn-effects "
                            >
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="load-bg text-center mb-5 d-none d-lg-block">
              <Link to="/">
                <button typ="button" className="load-more text-uppercase ">
                  Load more items
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
