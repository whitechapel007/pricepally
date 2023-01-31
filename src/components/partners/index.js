import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import image1 from "../../assets/images/media-img1.png";
import image2 from "../../assets/images/media-img2.png";
import image3 from "../../assets/images/media-img3.png";
const Partners = () => {
  return (
    <section className="media-wrapper  ml-2 mr-2 d-none d-lg-block">
      <div className="container">
        <div id="media-bg" className="followers-bg mb-5">
          <h4 className="text-center mb-4">Partners &amp; Media</h4>

          <OwlCarousel autoPlay={true} loop>
            <div className="item">
              {" "}
              <img className="media-img" src={image1} alt="media-img1" />
            </div>
            <div className="item">
              {" "}
              <img className="media-img" src={image2} alt="media-img1" />
            </div>
            <div className="item">
              {" "}
              <img className="media-img" src={image3} alt="media-img1" />
            </div>
            <div className="item">
              {" "}
              <img className="media-img" src={image3} alt="media-img1" />
            </div>
            <div className="item">
              {" "}
              <img className="media-img" src={image2} alt="media-img1" />
            </div>
            <div className="item">
              {" "}
              <img className="media-img" src={image1} alt="media-img1" />
            </div>
            <div className="item">
              {" "}
              <img className="media-img" src={image2} alt="media-img1" />
            </div>
            <div className="item">
              {" "}
              <img className="media-img" src={image1} alt="media-img1" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;
