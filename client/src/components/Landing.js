import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slidder from "./Slidder";
import { Link, useNavigate } from "react-router-dom";
import Map from "./Map";
import Faq from "./Faq";
import Card from "./Card";
import Review from "./Review";
import ReactGA from "react-ga";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsChevronDown } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaBoxOpen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { RiBox3Fill } from "react-icons/ri";

const Landing = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [moveType, setMoveType] = useState("");
  const [moveSize, setMoveSize] = useState("");
  const [fromSub, setFromSub] = useState("");
  const [toSub, setToSub] = useState("");
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();
  const refOne = useRef(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  // useEffect(() => {
  //   document.addEventListener("click", handleClickOut, true);
  // });

  // const handleClickOut = (e) => {
  //   if (!refOne.current.contains(e.target)) {
  //     console.log("Click out");
  //   } else {
  //     console.log("click in");
  //   }
  // };

  const collectData = async (e) => {
    ReactGA.event({
      category: "Test",
      action: "submit",
      label: "testing",
    });
    e.preventDefault();
    const data = { type: moveType, size: moveSize };
    toast.success("Booked Successfully", {
      position: "top-center",
    });
    navigate("/booking", { state: { fromHome: { data } } });
    setName("");
    setEmail("");
    setMobile("");
    setMoveType("");
    setMoveSize("");
    setFromSub("");
    setToSub("");
    setConfirm(true);
    try {
      const response =
        // await fetch("https://removalist.onrender.com/",
        //await fetch("http://localhost:4001/"
        await fetch("http://localhost:4001/", {
          method: "post",
          body: JSON.stringify({
            name,
            email,
            mobile,
            moveType,
            moveSize,
            fromSub,
            toSub,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const notify = () => {
    toast.success("Booked Successfully", {
      position: "top-center",
    });
  };

  return (
    <>
      <div
        data-spy="scroll"
        data-target=".site-navbar-target"
        data-offset="300"
       >
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
              <div className="d-flex align-items-end">
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

                <div className="ml-auto w-24">
                  <nav className="main-nav" role="navigation">
                    <ul
                      className="
                      site-menu
                      main-menu
                      site-menu-dark
                      js-clone-nav
                      mr-auto
                      d-none d-lg-block
                      m-0
                      p-3
                        "
                    >
                      <li class="cta">
                        <a class="nav-link">
                          <span
                            ref={refOne}
                            onMouseEnter={() => {
                              // setDropdownOpen1(false);
                              // setDropdownOpen(false);
                              setDropdownOpen2(!dropdownOpen2);
                            }}
                            onMouseLeave={() => {
                              setDropdownOpen2(false);
                            }}
                          >
                            Areas we service
                            <BsChevronDown style={{ fontSize: "20px" }} />
                          </span>
                          {dropdownOpen2 ? (
                            <div
                              style={{
                                background: "white",
                                marginTop: "11px",
                                borderRadius: "20px",
                                padding: "5px",
                                position: "fixed",
                              }}
                            >
                              <h5
                                style={{
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  color: "#FFA500",
                                  textTransform: "uppercase",
                                }}
                              >
                                Areas we service
                              </h5>
                              <div className="contain">
                                <div class="column">
                                  <p className="heading">Inner West Suburbs</p>
                                  <p className="heading">Eastern Suburbs</p>
                                  <p className="heading">Western Suburbs</p>

                                  <p className="heading">Southern Suburbs</p>
                                  <p className="heading">North West Suburbs</p>
                                  <p className="heading">Northern Suburbs</p>
                                  <p className="heading">NSW Suburbs</p>
                                </div>
                                <div class="column">
                                  <p className="subHead">
                                    Inner West Suburbs Removalists
                                  </p>
                                  <p className="subHead">
                                    Removalists Annandale
                                  </p>
                                  <p className="subHead">
                                    Removalists Canterbury
                                  </p>
                                </div>

                                <div class="column">
                                  <p className="subHead">
                                    Inner West Suburbs Removalists
                                  </p>
                                  <p className="subHead">
                                    Removalists Annandale
                                  </p>
                                  <p className="subHead">
                                    Removalists Canterbury
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </a>
                      </li>

                      <li class="cta">
                        <a class="nav-link">
                          <span
                            onMouseEnter={() => {
                              // setDropdownOpen1(false);

                              // setDropdownOpen2(false);
                              setDropdownOpen(!dropdownOpen);
                            }}
                            onMouseLeave={() => {
                              setDropdownOpen(false);
                            }}
                          >
                            Country Moves
                            <BsChevronDown style={{ fontSize: "20px" }} />
                          </span>
                          {dropdownOpen ? (
                            <div
                              style={{
                                background: "white",
                                marginTop: "11px",
                                borderRadius: "20px",
                                padding: "5px",
                                position: "fixed",
                              }}
                            >
                              <h5
                                style={{
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  color: "#FFA500",
                                  textTransform: "uppercase",
                                }}
                              >
                                Country Moves
                              </h5>

                              <div className="contain">
                                <div class="column">
                                  <p
                                    className="subHead"
                                    style={{
                                      textAlign: "center",
                                      color: "#7C0CDA",
                                    }}
                                  >
                                    NORTH
                                  </p>
                                  <p className="subHead">NSW to Broken Hill</p>
                                  <p className="subHead">NSW to Byron Bay</p>
                                  <p className="subHead">
                                    NSW to Central Coast
                                  </p>
                                  <p className="subHead">
                                    NSW to Coffs Harbour
                                  </p>
                                  <p className="subHead">NSW to Gosford</p>
                                  <p className="subHead">
                                    NSW to Hunter Valley
                                  </p>
                                  <p className="subHead">NSW to Lismore</p>
                                  <p className="subHead">NSW to Newcastle</p>
                                </div>

                                <div class="column">
                                  <p
                                    className="subHead"
                                    style={{
                                      textAlign: "center",
                                      color: "#7C0CDA",
                                    }}
                                  >
                                    SOUTH
                                  </p>
                                  <p className="subHead">NSW to Batemans Bay</p>
                                  <p className="subHead">NSW to Bega</p>
                                  <p className="subHead">
                                    NSW to Capital Monaro & Snowy
                                  </p>
                                  <p className="subHead">
                                    NSW to Coonabarabran
                                  </p>
                                  <p className="subHead">NSW to Cooma</p>
                                  <p className="subHead">NSW to Finley</p>
                                  <p className="subHead">NSW to Kiama</p>
                                  <p className="subHead">NSW to Goulburn</p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </a>
                      </li>

                      <li class="cta">
                        <a class="nav-link">
                          <span
                            onMouseEnter={() => {
                              setDropdownOpen1(!dropdownOpen1);
                              // setDropdownOpen(false);
                              // setDropdownOpen2(false);
                            }}
                            onMouseLeave={() => {
                              setDropdownOpen1(false);
                            }}
                          >
                            Interstate Moves
                            <BsChevronDown style={{ fontSize: "20px" }} />
                          </span>
                          {dropdownOpen1 ? (
                            <div
                              style={{
                                background: "white",
                                marginTop: "11px",
                                borderRadius: "20px",
                                padding: "5px",
                                position: "fixed",
                              }}
                            >
                              <h5
                                style={{
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  color: "#FFA500",
                                  textTransform: "uppercase",
                                }}
                              >
                                Interstate Moves
                              </h5>

                              <div className="contain">
                                <div class="column">
                                  <p
                                    className="subHead"
                                    style={{
                                      textAlign: "center",
                                      color: "#7C0CDA",
                                    }}
                                  >
                                    INTERSTATE REMOVALISTS
                                  </p>
                                  <p className="subHead">Australia- Wide</p>
                                  <p className="subHead">Adelaide</p>
                                  <p className="subHead">Brisbane</p>
                                  <p className="subHead">Canberra</p>
                                  <p className="subHead">Gold Coast</p>
                                  <p className="subHead">Melbourne</p>
                                  <p className="subHead">Perth</p>
                                  <p className="subHead">Sydney</p>
                                </div>

                                <div className="column">
                                  <div class="promo-box">
                                    <p>Learn About Our New</p>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <h5 className="box">
                                        FREE
                                        <br /> Boxes
                                      </h5>
                                      <FaBoxOpen
                                        style={{
                                          fontSize: "50px",
                                          alignItems: "end",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </a>
                      </li>

                      <li class="cta">
                        <a href="tel:0413358050" class="nav-link">
                          <span>
                            <FaMobileAlt style={{ fontSize: "20px" }} />
                            +610413358050
                          </span>
                        </a>
                      </li>
                      <li class="cta">
                        <a href="/" class="nav-link">
                          <span>Get Quote</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* <a
                    href="/"
                    className="
                  d-inline-block d-lg-none
                  site-menu-toggle
                  js-menu-toggle
                  text-black
                  float-right
                 "
                  >
                    <span className="icon-menu h3"></span>
                  </a> */}
                </div>
              </div>
            </div>
          </header>

          <div className="intro-section" id="home-section">
            <div
              className="slide-1"
              style={{
                backgroundImage: `url('assets/images/images/bg.jpeg')`,
              }}
              data-stellar-background-ratio="0.5"
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="row align-items-center" my-5>
                      <div
                        id="demoform"
                        className="col-lg-7 ml-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <form
                          action="submit"
                          method="post"
                          className="form-box"
                          onSubmit={collectData}
                        >
                          <h3 className="h4 text-black mb-4">
                            <b>Fill Out Our Form For Your Package</b>
                          </h3>
                          <div className="form-group row">
                            <div class="col-md-4 mb-3 mb-lg-0">
                              <input
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder="Full Name*"
                                required="true"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                            <div class="col-md-4 mb-3 mb-lg-0">
                              <input
                                name="email"
                                id="email"
                                type="text"
                                class="form-control"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div class="col-md-4">
                              <input
                                name="mobileNumber"
                                id="mobileNumber"
                                type="number"
                                className="form-control"
                                placeholder="Phone Number*"
                                required
                                maxlength="10"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <div class="col-md-6 mb-3 mb-lg-0">
                              <select
                                className="form-control"
                                required
                                id="state"
                                value={moveType}
                                onChange={(e) => setMoveType(e.target.value)}
                              >
                                <option>Move Type*</option>
                                <option value="Local Move">Local Move</option>
                                <option value="Country Move">
                                  Country Move
                                </option>
                                <option value="Interstate Move">
                                  Interstate Move
                                </option>
                                <option value="Business Move">
                                  Business Move
                                </option>
                                <option value="Storage">Storage</option>
                              </select>
                            </div>
                            <div class="col-md-6">
                              <select
                                className="form-control"
                                required
                                id="demoClass"
                                value={moveSize}
                                onChange={(e) => setMoveSize(e.target.value)}
                              >
                                <option>Move Size*</option>
                                <option value="Studio">Studio</option>
                                <option value="1 Bedroom">1 Bedroom</option>
                                <option value="2 Bedroom">2 Bedroom</option>
                                <option value="3 Bedroom">3 Bedroom</option>
                                <option value="4 Bedroom">4 Bedroom</option>
                                <option value="5 Bedroom">5 Bedroom</option>
                                <option value="6 Bedroom">6 Bedroom</option>
                                <option value="7+ Bedroom">7+ Bedroom</option>
                              </select>
                            </div>
                          </div>

                          <div className="form-group row">
                            <div class="col-md-6 mb-3 mb-lg-0">
                              <input
                                name="mobileNumber"
                                id="mobileNumber"
                                type="text"
                                className="form-control"
                                placeholder="From Suburb"
                                required
                                maxlength="20"
                                value={fromSub}
                                onChange={(e) => setFromSub(e.target.value)}
                              />
                            </div>
                            <div class="col-md-6">
                              <input
                                name="mobileNumber"
                                id="mobileNumber"
                                type="text"
                                className="form-control"
                                placeholder="To Suburb"
                                required
                                maxlength="20"
                                value={toSub}
                                onChange={(e) => setToSub(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="form-group">
                            <input
                              type="submit"
                              className="btn btn-primary btn-pill"
                              value="Get My Quote Now"
                              // onClick={notify}
                            />
                          </div>
                        </form>
                      </div>

                      <div className="col-lg-5 mb-4">
                        <h1 data-aos="fade-up" data-aos-delay="100">
                          Removalists NSW Affordable Furniture Removals
                        </h1>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <FcGoogle style={{ fontSize: "50px" }} />
                          <FaFacebook
                            style={{ fontSize: "50px", color: "yellow" }}
                          />
                          <SiTrustpilot style={{ fontSize: "50px" , color: "yellow" }} />
                          <RiBox3Fill style={{ fontSize: "50px" , color: "yellow" }} />
                        </div>

                        <p
                          className="mb-4"
                          data-aos="fade-up"
                          data-aos-delay="150"
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div>
                              <span
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                4.7
                              </span>
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStarHalf
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                            </div>

                            <div>
                              <span
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                4.9
                              </span>
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStarHalf
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                            </div>
                            <div>
                              <span
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                4.8
                              </span>
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStarHalf
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                            </div>
                            <div>
                              <span
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                4.5
                              </span>
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStar
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                              <FaStarHalf
                                style={{ fontSize: "10px", color: "#D2DB0C" }}
                              />
                            </div>
                          </div>

                          <br />
                          <span style={{ color: "white", fontWeight: "bold",marginTop:"-10px"}}>
                     
                            We Are NSW's Highest Rated Removalist Company & The
                            Most Affordable! Includes Unlimited FREE Moving
                            Boxes.
                          </span>
                        </p>

                        <p data-aos="fade-up" data-aos-delay="200">
                          <a
                            href="#programs-section"
                            className="btn btn-primary py-3 px-5 btn-pill"
                          >
                            Know more
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card />

        <div class="site-section pb-0">
          <div class="future-blobs">
            <div class="blob_2">
              <img src="assets/images/deco_1.svg" alt="Image" />
            </div>
            <div class="blob_1">
              <img src="assets/images/deco_2.svg" alt="Image" />
            </div>
          </div>
          <div class="container">
            <div
              class="row mb-5 justify-content-center"
              data-aos="fade-up"
              data-aos-delay=""
            >
              <div class="col-lg-7 text-center">
                <h2 class="section-title">Why Choose Us</h2>
              </div>
            </div>
            <div class="row">
              <div
                class="col-lg-4 ml-auto align-self-start"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="p-4 rounded bg-white why-choose-us-box">
                  <div
                    className="
                        d-flex
                        align-items-center
                        custom-icon-wrap custom-icon-light
                        mb-3
                    "
                  >
                    <div className="mr-3">
                      <span className="custom-icon-inner">
                        <span
                          className="icon icon-truck"
                          style={{ color: "black" }}
                        ></span>
                      </span>
                    </div>
                    <div>
                      <h3 className="m-0">We Care for The Environment </h3>
                    </div>
                  </div>

                  <div
                    className="
                        d-flex
                        align-items-center
                        custom-icon-wrap custom-icon-light
                        mb-3
                    "
                  >
                    <div className="mr-3">
                      <span className="custom-icon-inner">
                        <span
                          className="icon icon-truck"
                          style={{ color: "black" }}
                        ></span>
                      </span>
                    </div>
                    <div>
                      <h3 className="m-0">Free Boxes</h3>
                    </div>
                  </div>

                  <div
                    className="
                        d-flex
                        align-items-center
                        custom-icon-wrap custom-icon-light
                        mb-3
                    "
                  >
                    <div className="mr-3">
                      <span className="custom-icon-inner">
                        <span
                          className="icon icon-truck"
                          style={{ color: "black" }}
                        ></span>
                      </span>
                    </div>
                    <div>
                      <h3 className="m-0">AFRA-accredited Moving</h3>
                    </div>
                  </div>

                  <div
                    className="
                        d-flex
                        align-items-center
                        custom-icon-wrap custom-icon-light
                        mb-3
                     "
                  >
                    <div className="mr-3">
                      <span className="custom-icon-inner">
                        <span
                          className="icon icon-truck"
                          style={{ color: "black" }}
                        ></span>
                      </span>
                    </div>
                    <div>
                      <h3 className="m-0">Competitive Rates</h3>
                    </div>
                  </div>

                  <div
                    className="
                        d-flex
                        align-items-center
                        custom-icon-wrap custom-icon-light
                        mb-3
                    "
                  >
                    <div className="mr-3">
                      <span className="custom-icon-inner">
                        <span
                          className="icon icon-truck"
                          style={{ color: "black" }}
                        ></span>
                      </span>
                    </div>
                    <div>
                      <h3 className="m-0">Most Experienced</h3>
                    </div>
                  </div>

                  <div
                    className="
                        d-flex
                        align-items-center
                        custom-icon-wrap custom-icon-light
                        mb-3
                    "
                  >
                    <div className="mr-3">
                      <span className="custom-icon-inner">
                        <span
                          className="icon icon-truck"
                          style={{ color: "black" }}
                        ></span>
                      </span>
                    </div>
                    <div>
                      <h3 className="m-0">Storage </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-7 align-self-end"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src="assets/images/engg.png"
                  alt="Image"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="site-section"
          id="programs-section"
          style={{ backgroundColor: "black" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-9 text-center"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <h2 className="section-title" style={{ color: "white" }}>
                  Removalists NSW Services
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
                  src="assets/images/why.jpeg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
              <div
                className="col-lg-4 ml-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-white mb-4" style={{ fontWeight: "bold" }}>
                  We offer a Vast range of Customer Support:
                </h2>
                <p
                  className="mb-4"
                  style={{ color: "yellow", fontWeight: "bold" }}
                >
                  <ul>
                    <li>Local Move Type</li>
                    <li>Country Move Type</li>
                    <li>Interstate Move Type</li>
                    <li>Business Move Type</li>
                    <li>Storage</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Review />

        <Faq />

        <div>
          <Slidder />
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
                  Whether you are moving local or interstate, you can enjoy
                  peace of mind knowing that all household items will be
                  strapped down, secure and in sturdy moving boxes. Our fleet of
                  removal trucks is made up of a range of different vehicles
                  with different sizes and capacities, meaning that whatever the
                  job, you enjoy a stress free move.
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
      </div>

      <ToastContainer />
    </>
  );
};

export default Landing;
