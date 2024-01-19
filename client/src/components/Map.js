const Map = () => {
  return (
    <>
      <div>
        <div className="site-section" id="programs-section">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div
                className="col-lg-7 text-center"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <h2 className="section-title">Our Location</h2>
              </div>
            </div>
            <div className="row mb-5 align-items-center">
              <div
                className="col-lg-7 mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <iframe className="map"
                     style={{borderRadius:"10px",boxShadow:"10px 10px 10px lightgrey" }}
                  width="523"
                  height="403"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=%2016%20Tichborne%20Dr+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                /> 
 
              </div>
              <div
                className="col-lg-4 ml-auto"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{borderRadius:"10px",boxShadow:"10px 10px 10px lightgrey" }}
              >
                <h2 className="text-black mb-4">Our Address</h2>
                <p className="mb-4">
                16 Tichborne Dr, Quakers Hill NSW 2763, Australia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
