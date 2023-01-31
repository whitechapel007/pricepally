import React from "react";
import logo from "../../assets/images/main-logo.svg";
import profile from "../../assets/images/profile_img.jpg";
import "./header.css";
const Header = () => {
  return (
    <>
      <header>
        <section className="mobile-header">
          <div className="d-flex  justify-content-between pics">
            <div className="">
              <img
                className="mobile-logo"
                src={logo}
                alt="mobile-logo"
                width="120px"
              />
            </div>
            <div className="">
              <img
                className="profile-img"
                src={profile}
                alt="profile-img"
                width="40px"
              />
            </div>
          </div>

          <div className="mobile-search">
            <div className="">
              <div
                className="search-container"
                data-toggle="modal"
                data-target="#search-modal"
              >
                <form>
                  <div className="input_container">
                    <input
                      type="text"
                      className="input-box"
                      placeholder="search"
                    />

                    <span className="material-icons input_img">search</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
