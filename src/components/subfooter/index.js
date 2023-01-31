import dedicated from "../../assets/images/dedicated-icon.svg";
import returnicon from "../../assets/images/return_icon.png";
import onlineicon from "../../assets/images/online-icon.png";
const SubFooter = () => {
  return (
    <section className="download-bottom-bg  ml-2 mr-2 d-none d-lg-block">
      <div className="container">
        <div className="row m-auto">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-3 mt-2">
                <img src={dedicated} width="60px" height="60px" alt="icon" />
              </div>
              <div className="col-lg-9">
                <h4>Dedicated Service</h4>
                <p>We are committed to serve you the best products</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-3 mt-2">
                <img src={returnicon} width="60px" height="60px" alt="icon" />
              </div>
              <div className="col-lg-9">
                <h4>Free Return</h4>
                <p>We stand behind what we serve you</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-3 mt-2">
                <img src={onlineicon} width="60px" height="60px" alt="icon" />
              </div>
              <div className="col-lg-9">
                <h4>Online 24/7</h4>
                <p>Call +2347045000137</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
