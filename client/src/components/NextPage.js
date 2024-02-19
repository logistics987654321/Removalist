import { useLocation, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Map from "./Map";

const NextPage = () => {
  //   const moveType = "Country Move";
  //   const moveSize = "3 Bedroom";
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  const location = useLocation();
  const { fromHome } = location.state;
  console.log(fromHome);
  let moveType = fromHome.data.type;
  let moveSize = fromHome.data.size;

  let headingText = "";
  let imageSource = "";
  let additionalContent = null;
  let message = "";

  if (moveType === "Local Move") {
    switch (moveSize) {
      case "Studio":
        message = "We Recommend:";
        headingText = "3T,2 Removalists";
        imageSource = "assets/images/images/2.jpg";
        break;
      case "1 Bedroom":
        message = "We Recommend:";
        headingText = "4.5T,2 Removalists";
        imageSource = "assets/images/images/2.jpg";
        break;
      case "2 Bedroom":
        message = "We Recommend:";
        headingText = "6-7T,2 Removalists";
        imageSource = "assets/images/images/2.jpg";
        break;
      case "3 Bedroom":
        message = "We Recommend:";
        headingText = "10-12T,2 Removalists";
        imageSource = "assets/images/images/2.jpg";
        break;
      case "4 Bedroom":
        message = "We Recommend:";
        headingText = "14-16T,2 Removalists";
        imageSource = "assets/images/images/2.jpg";
        break;
      case "5 Bedroom":
        message = "We Recommend:";
        headingText = "14-16T,2 Removalists";
        imageSource = "assets/images/images/2.jpg";
        break;
      case "6 Bedroom":
        message = "We Recommend:";
        headingText = "14-16T,3 Removalists";
        imageSource = "assets/images/images/3.jpg";
        break;
      case "7+ Bedroom":
        message = "We Recommend:";
        headingText = "14-16T,3 Removalists";
        imageSource = "assets/images/images/3.jpg";
        break;
      default:
        // Handle other cases if needed
        message = "";
        headingText = "Unknown Truck";
        imageSource = "assets/images/images/thank_you.png";
    }
  } else {
    // Handle other moveType values if needed
    // headingText = "Unknown Truck Type";
    message = "Thank You";
    imageSource = "assets/images/images/thankyou1.png";
    additionalContent = (
      <div>
        <h2 style={{ textAlign: "center", color: "black" }}>
          We have received your query and will be back in contact with you
          within 24 hours. Please call at{" "}
          <a href="tel:0413358050">+610413358050</a> for urgent inquiries.
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <header
          className="site-navbar py-4 js-sticky-header site-navbar-target"
          role="banner"
        >
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <div className="site-logo mr-auto w-100">
              <a href="/">
                    <LazyLoadImage
                      style={{
                        width: "300px",
                        maxHeight: "200px",
                        borderRadius: "20px",
                      }}
                      src="assets/images/loco2.png"
                    />
                    {/* Prime Removals<span style={{ color: "yellow" }}> &</span>
                    Storage */}
                  </a>
              </div>

              <div className="mx-auto text-center"></div>
            </div>
          </div>
        </header>
        <div
          style={{ height: "80px", background: "#000" }}
          className="bg-shadow-box"
        ></div>
      </div>

      <div
        className="site-section"
        id="programs-section"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-7 text-center"
              data-aos="fade-up"
              data-aos-delay=""
            >
              <h2 className="section-title" style={{ color: "black" }}>
                {message}
                {additionalContent}
              </h2>
            </div>
          </div>
          <div className="row mb-5 align-items-center">
            <div
              className="col-lg-7 mb-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <LazyLoadImage
                src={imageSource}
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div
              className="col-lg-4 ml-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-black mb-4" style={{ fontWeight: "bold" }}>
                {headingText}
              </h2>
              <p
                className="mb-4"
                style={{ color: "black", fontWeight: "bold" }}
              >
                <ul>
                  <li>Precision in Delivery</li>
                  <li>Cost-Effective Solutions</li>
                  <li>Tailored to Your Needs</li>
                  <li>Reliability You Can Trust</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Map />

      <footer className="footer-section bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 style={{ color: "white" }}>
                About Prime Removals
                <span style={{ color: "yellow" }}> & </span>
                Storage
              </h3>
              <p style={{ color: "white" }}>
                Whether you are moving local or interstate, you can enjoy peace
                of mind knowing that all household items will be strapped down,
                secure and in sturdy moving boxes. Our fleet of removal trucks
                is made up of a range of different vehicles with different sizes
                and capacities, meaning that whatever the job, you enjoy a
                stress free move.
              </p>
            </div>

            <div className="col-md-3 mx-auto ">
              <h3 style={{ color: "white" }}>Connect with us</h3>
              <div>
                {/* <a href="https://wa.me/+919681341693">
                    <img src="assets/images/wp.jpg" alt="Image" class="fb" />
                  </a> */}
                <a
                  href="https://wa.me/+610413358050"
                  className="icon icon-whatsapp"
                  style={{
                    color: "yellow",
                    fontSize: "35px",
                    marginRight: "20px",
                  }}
                ></a>
                <a
                  href=""
                  className="icon icon-instagram"
                  style={{ color: "yellow", fontSize: "35px" }}
                ></a>
                <a
                  href=""
                  className="icon icon-linkedin"
                  style={{
                    color: "yellow",
                    fontSize: "35px",
                    marginLeft: "20px",
                  }}
                ></a>
              </div>
            </div>

            <div className="col-md-4">
              <h3 style={{ color: "white" }}>Contact Details</h3>
              <p>+610413358050</p>
              <a href="mailto:prime.removal.and.storage@gmail.com">
                prime.removal.and.storage@gmail.com
              </a>
            </div>
          </div>

          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5">
                <p>
                  Copyright &copy; Prime Removals
                  <span style={{ color: "yellow" }}> & </span>
                  Storage 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NextPage;
