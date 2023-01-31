import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search-img1.jpg";
import search2 from "../../assets/images/search-img2.jpg";
import listImg from "../../assets/images/list-img1.jpg";
import { Link } from "react-router-dom";
const DesktopHeader = () => {
  return (
    <div class="navigation-wrap start-header start-style">
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-5 col-md-5">
            <ul class="list-unstyled mb-0">
              <li class="d-inline-block">
                <Link to="/" className="navbar-brand">
                  <img src={logo} width="40px" alt="logo" />
                </Link>
              </li>
              <li className="d-inline-block">
                <div className="search-container">
                  <form>
                    <div className="outer_search">
                      <div className="saerch-bar" id="search_bars">
                        <span className="material-icons">search</span>
                        <input
                          type="text"
                          placeholder="Search Food Items or Users"
                          name="search"
                        />
                      </div>
                      <button className="yellow-bg">SEARCH</button>
                    </div>
                    <div className="search-dropdown" id="scrolling">
                      <div className="search-items">
                        <h6 className="grey-text">FOOD ITEMS</h6>
                        <ul className="list-unstyled mb-3">
                          <li className="d-inline-block">
                            <img
                              className="seaarch-img"
                              src={search}
                              alt="search-img1"
                            />
                          </li>
                          <li className="d-inline-block">
                            <h5>Tuwo Rice (25kg)</h5>
                          </li>
                        </ul>
                        <ul className="list-unstyled mb-3">
                          <li className="d-inline-block">
                            <img
                              className="seaarch-img"
                              src={search2}
                              alt="search-img1"
                            />
                          </li>
                          <li className="d-inline-block">
                            <h5>Tuwo Rice (50kg)</h5>
                          </li>
                        </ul>
                        <ul className="list-unstyled mb-3">
                          <li className="d-inline-block">
                            <img
                              className="seaarch-img"
                              src={search}
                              alt="search-img1"
                            />
                          </li>
                          <li className="d-inline-block">
                            <h5>Tuwo Rice (25kg)</h5>
                          </li>
                        </ul>
                      </div>
                      <div className="search-users">
                        <h6 className="grey-text">Users</h6>

                        <ul className="list-unstyled mb-3">
                          <li className="d-inline-block">
                            <img
                              className="seaarch-list"
                              src={listImg}
                              alt="search-img1"
                            />
                          </li>
                          <li className="d-inline-block">
                            <h5>Tumininu Tayo</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
          <div className=" col-8 col-sm-7 col-md-7 ">
            <nav className="navbar navbar-expand-md navbar-light float-right text-center ">
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent "
              >
                <ul class="navbar-nav drop-menu ">
                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                    <Link class="nav-link active " to="index.html ">
                      <p class="mb-0 ">
                        <span class="material-icons">home</span>
                      </p>
                      <p class="mb-0 ">Home</p>
                    </Link>
                  </li>
                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                    <Link class="nav-link " to="# ">
                      <p class="mb-0 ">
                        <span class="material-icons ">people_outline</span>
                      </p>
                      <p class="mb-0 ">Users</p>
                    </Link>
                  </li>

                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                    <Link class="nav-link " to="# ">
                      <p class="mb-0 ">
                        <span class="material-icons">shopping_cart</span>
                      </p>
                      <p class="mb-0 ">Cart</p>
                    </Link>
                  </li>
                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                    <Link class="nav-link " to="# ">
                      <p class="mb-0 ">
                        <span class="material-icons">shopping_bag</span>
                      </p>
                      <p class="mb-0 ">Order</p>
                    </Link>
                  </li>
                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                    <Link to="#" class="nav-link ">
                      <p class="mb-0 ">
                        <span class="material-icons ">more_horiz</span>
                      </p>
                      <p class="mb-0 ">
                        More <span class="toggle"></span>
                      </p>
                    </Link>
                    <ul class="dropdown p-0  nav-clr">
                      <li class="nav-item pl-4 pl-md-0 ml-0 ">
                        <Link to="#" class="nav-link ">
                          {" "}
                          <span class="material-icons ">
                            account_balance_wallet
                          </span>{" "}
                          Wallet{" "}
                        </Link>
                      </li>
                      <li class="nav-item pl-4 pl-md-0 ml-0 ">
                        <Link to="#" class="nav-link ">
                          {" "}
                          <span class="material-icons ">
                            notifications
                          </span>{" "}
                          Notifications{" "}
                        </Link>
                      </li>
                      <li class="nav-item pl-4 pl-md-0 ml-0 ">
                        <Link to="#" class="nav-link ">
                          {" "}
                          <span class="material-icons ">share</span> Refer and
                          Earn{" "}
                        </Link>
                      </li>
                      <li class="nav-item pl-4 pl-md-0 ml-0 ">
                        <Link to="#" class="nav-link ">
                          {" "}
                          <span class="material-icons ">favorite_border</span>
                          Saved Products{" "}
                        </Link>
                      </li>
                      <li class="nav-item pl-4 pl-md-0 ml-0 ">
                        <Link to="#" class="nav-link ">
                          {" "}
                          <span class="material-icons ">error_outline</span>
                          Frequently Asked Questions{" "}
                        </Link>
                      </li>
                      <li class="nav-item pl-4 pl-md-0 ml-0 ">
                        <Link to="#" class="nav-link ">
                          {" "}
                          <span class="material-icons ">settings_cell</span>
                          Contact Admin{" "}
                        </Link>
                      </li>
                      <li class="nav-item pl-4 pl-md-0 ml-0 ">
                        <Link to="#" class="nav-link ">
                          {" "}
                          <span class="material-icons">location_city</span>
                          Change City
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                    <Link to="#" class="nav-link ">
                      <p class="mb-0 ">
                        <span class="material-icons ">account_circle</span>
                      </p>
                      <p class="mb-0 ">
                        My Account <span class="toggle"></span>
                      </p>
                    </Link>
                    <ul class="dropdown p-0 nav-clr">
                      <li class="nav-item pl-4 pl-md-0 ml-0 ">
                        <Link to="#" class="nav-link ">
                          {" "}
                          <span class="material-icons-outlined ">
                            account_circle
                          </span>{" "}
                          Profile{" "}
                        </Link>
                      </li>
                      <li class="nav-item pl-4 pl-md-0 ml-0 ">
                        <Link to="#" class="nav-link ">
                          {" "}
                          <span class="material-icons-outlined ">
                            location_on
                          </span>{" "}
                          Manage Address{" "}
                        </Link>
                      </li>
                      <li class="nav-item pl-4 pl-md-0 ml-0 ">
                        <Link to="#" class="nav-link ">
                          {" "}
                          <span class="material-icons-outlined ">
                            lock
                          </span>{" "}
                          Change Password{" "}
                        </Link>
                      </li>
                      <li class="nav-item pl-4 pl-md-0 ml-0 ">
                        <Link to="/" class="nav-link ">
                          {" "}
                          <span class="material-icons-outlined ">login</span>
                          Logout{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
