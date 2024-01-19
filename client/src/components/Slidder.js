import "../App.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Test from "./Test";

const Slidder = () => {
  return (
    <div
      className="container"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <div className="col-lg-12 text-center" style={{ textAlign: "center" }}>
        <h2 className="section-title">Trusted by Thousands of Happy Customers</h2>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        // autoplay={{
        //   delay: 500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-clinet-msg">
            <p style={{ color: "black", fontWeight: "bold" }}>
              "Outstanding logistics service! Their reliability and precision in
              handling our supply chain have proven crucial. Highly recommend
              for seamless and efficient operations
            </p>
          </div>
          <Test name={"Ruby Lawson"} job={"Nurse"} image={"assets/images/person_2.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-clinet-msg">
            <p style={{ color: "black", fontWeight: "bold" }}>
              Transformative logistics strategies! This company optimized our
              warehouse operations, bringing clockwork precision. A reliable
              partner for streamlining and boosting operational efficiency.
            </p>
          </div>
          <Test name={"Lucas Turner"} job={"Developer"} image={"assets/images/person_1.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-clinet-msg">
            <p style={{ color: "black", fontWeight: "bold" }}>
              Dependable logistics ally! Timely deliveries, cost-effectiveness,
              and unwavering reliability make them our preferred choice.
              Extraordinary solutions for a seamless and efficient business
              process.
            </p>
          </div>
          <Test name={"Mia Bennett"} job={"Manager"} image={"assets/images/person_4.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-clinet-msg">
            <p style={{ color: "black", fontWeight: "bold" }}>
              Crucial logistics support! Precision in delivering raw materials
              just in time is unmatched. A trustworthy ally for manufacturing
              efficiency and timely operations
            </p>
          </div>
          <Test name={"Noah Kennedy"} job={"Business"} image={"assets/images/person_2.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-clinet-msg">
            <p style={{ color: "black", fontWeight: "bold" }}>
              Effortless distribution excellence! Navigating complex challenges
              with ease, they are a dream team in logistics. Reliable and
              effective solutions for seamless distribution operations
            </p>
          </div>
          <Test name={"Isla Williams"} job={"Accountant"} image={"assets/images/person_1.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-clinet-msg">
            <p style={{ color: "black", fontWeight: "bold" }}>
              Effortless distribution excellence! Navigating complex challenges
              with ease, they are a dream team in logistics. Reliable and
              effective solutions for seamless distribution operations
            </p>
          </div>
          <Test name={"Ava Watson"} job={"Teacher"} image={"assets/images/person_4.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-clinet-msg">
            <p style={{ color: "black", fontWeight: "bold" }}>
              Fleet optimization experts! Their logistics expertise
              significantly reduced costs and improved efficiency. A
              game-changer for our fleet management, highly recommended for
              logistics excellence.
            </p>
          </div>
          <Test name={"Jack Harrison"} job={"Worker"} image={"assets/images/person_2.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-clinet-msg">
            <p style={{ color: "black", fontWeight: "bold" }}>
              Flawless retail logistics! Perfectly aligning with our retail
              strategy, they execute logistics solutions with precision. A
              reliable partner for elevating retail operations seamlessly.
            </p>
          </div>
          <Test name={"Olivia Harper"} job={"Electrician"} image={"assets/images/person_1.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-clinet-msg">
            <p style={{ color: "black", fontWeight: "bold" }}>
              Innovative procurement solutions! Their logistics approaches have
              redefined our procurement process, bringing efficiency and
              innovation. Highly recommended for their transformative impact.
            </p>
          </div>
          <Test name={"Liam Mitchell"} job={"Business"} image={"assets/images/person_2.jpg"}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slidder;
