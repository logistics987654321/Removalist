import "../App.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Test = (props) => {

  return (
    <>
      <div className="swiper-clinet-data">
        <div className="figure-img1 col-lg-5">
          <LazyLoadImage
            style={{ boxShadow: "4px 4px 4px 4px grey" }}
            src={props.image}
            className="icon icon-truck"
            alt="client review"
          />
        </div>

        <div className="figure-img2 col-lg-7">
          <p
            className="para"
            style={{ color: "black",  fontWeight: "bold" }}
          >
            {props.name}
          </p>
          <p
            className="para"
            style={{ color: "black",  fontWeight: "bold" }}
          >
            {props.job}
          </p>
        </div>
      </div>
    </>
  );
};

export default Test;
