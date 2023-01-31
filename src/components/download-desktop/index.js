import { Link } from "react-router-dom";
import appstore from "../../assets/images/appstore.png";
import mobile from "../../assets/images/download_mobile.png";
import playstore from "../../assets/images/playstore.png";
const DownloadDesktop = () => {
  return (
    <section className="download-wrapper  ml-2 mr-2 d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="download-content">
              <h3>Download the New Pricepally Mobile App </h3>
              <ul className="list-unstyled">
                <li className="d-inline-block">
                  <Link to="/">
                    <img src={appstore} alt="appstore" />
                  </Link>
                </li>
                <li className="d-inline-block">
                  <Link to="/">
                    <img src={playstore} alt="appstore" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="download-img">
              <img src={mobile} alt="download-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadDesktop;
