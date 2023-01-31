import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import youtube from "../../assets/images/youtube.svg";
import twitter from "../../assets/images/twitter.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="ml-2 mr-2 footer-wrapper d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4">
                <h5>Categories</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Food Stuff</Link>
                  </li>
                  <li>
                    <Link to="/">Packaged Food</Link>
                  </li>
                  <li>
                    <Link to="/">Fruits &amp; Nuts</Link>
                  </li>
                  <li>
                    <Link to="/">Meat, Poultry &amp; Sea Food</Link>
                  </li>
                  <li>
                    <Link to="/">Oils &amp; Spices</Link>
                  </li>
                  <li>
                    <Link to="/">Soup &amp; Stew Ingredients</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h5>Company</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Refer &amp; Earn</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/">Make Link List</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h5>Policy</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">COVID 19 Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Return Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="white-head">
              Join our mailing list &amp; receive exclusives
            </h5>
            <div className="form-group">
              <input
                type="text"
                name=""
                placeholder="First Name"
                className="form-control"
              />
              <input
                type="text"
                name=""
                placeholder="Last Name"
                className="form-control"
              />
            </div>
            <div className="input-group mb-3 join-bg">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
              />
              <div className="input-group-append join-btn">
                <Link to="/">
                  {" "}
                  <span className="input-group-text">Join List</span>{" "}
                </Link>
              </div>
            </div>
            <h6>Connect with us on</h6>
            <ul className="list-unstyled social-icons">
              <li className="d-inline-block">
                <Link to="/">
                  <img src={facebook} width="25px" alt="logo" />
                </Link>
                <Link to="/">
                  <img src={instagram} width="25px" alt="logo" />
                </Link>
                <Link to="/">
                  <img src={twitter} width="25px" alt="logo" />
                </Link>
                <Link to="/">
                  <img src={youtube} width="25px" alt="logo" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center">
          <small>© 2021 Pricepally All Rights Reserved </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
