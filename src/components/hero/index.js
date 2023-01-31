import "./hero.css";
import refer from "../../assets/images/refer-money.svg";
import list from "../../assets/images/list.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="col-md-12 col-lg-3 mobilehero-view">
      <div className="hero-content text-center">
        <div className="row align-center">
          <div className="col-6 col-md-6">
            <Link to="/">
              <div className="box-outline refer-bg">
                <h6>Refer &amp; Earn</h6>
                <p>Invite a friend now</p>
                <div className="home-list-img">
                  <img src={refer} alt="list" />
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-6">
            <Link to="/">
              <div className="box-outline list-make-bg">
                <h6>Make a list</h6>
                <p>Shop faster now</p>
                <div className="home-list-img">
                  <img src={list} alt="list" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
