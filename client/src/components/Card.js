
const Card = () => {
 

  return (
    <div>
      <h2
        className="section-title"
        style={{ color: "black", textAlign: "center" }}
      >
        Our Fleet of Moving Trucks For Local And Interstate Moves
      </h2>
      <div className="container">
        <ul class="cards">
          <li>
            <a class="card">
              <img
                src="assets/images/images/2.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <a href="/">
                  <input
                    type="submit"
                    className="btn btn-primary btn-pill"
                    value="Book Now"
                  />
                  </a>
                 
                  <div class="card__header-text">
                    <h2 class="card__title">
                      <b>Mighty Mouse</b> 
                    </h2>
                 
                  </div>
                </div>
                <p class="card__description">
                <ul>
                    <li>For the Smallest jobs</li>
                    <li>1 Bed Apartments</li>
                    <li>3-Person offices</li>
                    <li>14m3 Capacity</li>
                    <li>3t Light Truck</li>
                  </ul>
                </p>
              </div>
            </a>
          </li>
          <li>
            <a class="card">
              <img
                src="assets/images/images/2.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <a href="/">
                  <input
                    type="submit"
                    className="btn btn-primary btn-pill"
                    value="Book Now"
                  />
                  </a>
                  <div class="card__header-text">
                    <h2 class="card__title">
                      <b>Big Foot</b> 
                    </h2>
                  
                  </div>
                </div>
                <p class="card__description">
                <ul>
                    <li>For Large jobs</li>
                    <li>10-12t Large Truck</li>
                    <li>3-4 Bed Homes</li>
                    <li>10-12 Person offices</li>
                    <li>40-50m3 Capacity</li>
                  </ul>
                </p>
              </div>
            </a>
          </li>
          <li>
            <a class="card">
              <img
                src="assets/images/images/2.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <a href="/">
                  <input
                    type="submit"
                    className="btn btn-primary btn-pill"
                    value="Book Now"
                  />
                  </a>
                  <div class="card__header-text">
                    <h2 class="card__title">
                      <b>Godzilla</b> 
                    </h2>
        
                  </div>
                </div>
                <p class="card__description">
                  <ul>
                    <li>For Small jobs</li>
                    <li>1-2 Bed Apartments</li>
                    <li>4-6 Person offices</li>
                    <li>18-22m3 Capacity</li>
                    <li>4.5t Light Truck</li>
                  </ul>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a class="card">
              <img
                src="assets/images/images/3.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <a href="/">
                  <input
                    type="submit"
                    className="btn btn-primary btn-pill"
                    value="Book Now"
                  />
                  </a>
                  <div class="card__header-text">
                    <h2 class="card__title">
                      <b>Monster</b> 
                    </h2>
        
                  </div>
                </div>
                <p class="card__description">
                <ul>
                    <li>For Huge jobs</li>
                    <li>4-5 Bed Homes</li>
                    <li>15 Person offices</li>
                    <li>50-70m3 Capacity</li>
                    <li>14-16t Large Truck</li>
                  </ul>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
