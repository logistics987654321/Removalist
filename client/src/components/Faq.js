import { LazyLoadImage } from "react-lazy-load-image-component";
import React, { useState } from "react";

const Faq = () => {
  return (
    <>

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
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="row mb-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="container">
                <details>
                  <summary>What Is The Cheapest Day to Move?</summary>
                  <div className="paragraph">
                    Typically, the middle of the week is considered the cheapest
                    time to move, as moving companies are less busy and likely
                    to offer discounts at a reasonable price. Fridays and
                    weekends are usually the busiest (and therefore the most
                    expensive) days, as they are more convenient for people.
                    Prices can also be affected by other factors such as
                    distance, size of the removalist job, and demand. We also
                    offer our very own<span style={{color:"yellow"}}> <u>cheap removalists</u> </span>deals.
                  </div>
                </details>
              </div>
              <div class="container">
                <h1></h1>
                <details>
                  <summary>Do Removalists Always Provide Free Boxes?</summary>
                  <div className="paragraph">
                    It really depends on the Sydney removalists you are using.
                    While some removalists do provide free boxes, others may
                    charge a fee for them. It is best to check with the
                    removalist company you are using to find out what their
                    policy is on moving boxes and whether they charge a fee for
                    them. If you do not have the budget for <span style={{color:"yellow"}}><u>packing materials </u></span>
                    then it is possible to find used boxes for free at
                    supermarkets, local businesses or online even websites such
                    as Gumtree.com.
                  </div>
                </details>
              </div>
              <div class="container">
                <h1></h1>
                <details>
                  <summary>
                    Does Packing Come With Your Removalists Sydney Service?
                  </summary>
                  <div className="paragraph">
                    No, packing is not included in our standard package,
                    however, this is purchasable as an optional extra. Our
                    expert packing teams are cost-effective and ready to visit
                    your home before your move to safely wrap, pad and repack
                    all of your belongings quickly and efficiently. You can use
                    our affordable packing services for the whole home, a few
                    rooms, or just the garage - you choose!
                  </div>
                </details>
              </div>
              <div class="container">
                <h1></h1>
                <details>
                  <summary>Are Removalists Cheaper On Weekdays?</summary>
                  <div className="paragraph">
                    Yes, it is generally considered to be cheaper (and more
                    cost-effective) to book removalists on weekdays, as demand
                    for their services is typically lower during these days.
                  </div>
                </details>
              </div>
              <div class="container">
                <h1></h1>
                <details>
                  <summary>
                    How Long Does It Generally Take To Move Homes?
                  </summary>
                  <div className="paragraph">
                    The time it takes to move homes can vary depending on
                    factors such as :
                    <ul>
                      <li>The size of the move</li>
                      <li>The distance of the move</li>
                      <li>
                        The amount of cargo and preparation that is involved
                        (such as packing){" "}
                      </li>
                      <li>
                        Unforeseen circumstances such as traffic and weather
                        conditions
                      </li>
                    </ul>
                    On average, a local move within the same city can take
                    anywhere from a few hours to a full day, while a
                    long-distance move can take several days or even a week or
                    more. While our high-quality removalists will do everything
                    they can to get you to your new location as quickly as
                    possible, the factors highlighted above are key
                    considerations.
                  </div>
                </details>
              </div>
            </div>
            <div
              className="col-lg-6 ml-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="container">
                <h1></h1>
                <details>
                  <summary>Do Removalists Have Insurance?</summary>
                  <div className="paragraph">
                    You may be surprised to know that not every removal company
                    has insurance. It is important to do some research or ask
                    questions about what is covered before you move. At ZOOM
                    Removals, we offer full cover insurance, and transit
                    insurance workers compensation as part of our removalists
                    service. As we are a proud member of the Australian
                    Furniture Removalists Association, we are authorised to sell
                    transit insurance. Please visit our <span style={{color:"yellow"}}><u>removals insurance</u></span>  page
                    or speak with our insurance consultants if you would like to
                    learn more. We will happily answer any insurance-related
                    questions.
                  </div>
                </details>
              </div>

              <div class="container">
                <h1></h1>
                <details>
                  <summary>
                    What Are The Best Times To Start A Removalist Job?
                  </summary>
                  <div className="paragraph">
                    As a rule of thumb,{" "}
                    <span style={{color:"yellow"}}><u><b>the early morning hours, such as 8:00 AM</b></u></span>, is often
                    considered the best time to begin a removalist job. This is
                    because it effectively allows our guys to come over and do a
                    full day’s work. This also helps ensure that you have enough
                    time to complete the move. For smaller moves, you can often
                    start in the afternoon as there are fewer belongings to move
                    and it will be a simpler relocation job. As a pro tip, try
                    to avoid scheduling a removalist job during peak seasons,
                    such as holidays and weekends, as removalist companies are
                    likely to be busier and may charge higher rates during these
                    times. Alternatively, you can try and consider scheduling
                    your removalist job during the middle of the month when
                    demand is typically lower. Many people tend to move at the
                    beginning or end of the month, and so choosing a date In the
                    middle of a month will help increase the likelihood of
                    securing a removalist at a more affordable price.
                  </div>
                </details>
              </div>
              <div class="container">
                <h1></h1>
                <details>
                  <summary>Do You Pay For Removalists Upfront?</summary>
                  <div className="paragraph">
                    No, to secure your booking with Zoom Removals we require a
                    $200 refundable deposit for local moves. The balance is not
                    due until the day of your move and several payment methods
                    are available for your convenience.
                  </div>
                </details>
              </div>
              <div class="container">
                <h1></h1>
                <details>
                  <summary>
                    Is There A Checklist To Help Me Prepare For My Move?
                  </summary>
                  <div className="paragraph">
                    Yes, we offer several helpful resources and guides to help
                    you with your move:
                    <ul style={{color:"yellow"}}>
                      <li><u>Moving Checklist</u></li>
                      <li><u>Change Of Address Checklist</u></li>
                      <li><u>First Time Movers Checklist</u></li>
                      <li><u>Moving To Sydney Guides</u></li>
                      <li><u>Removal Costs Calculator</u></li>
                      <li><u>Packing Calculator</u></li>
                      <li><u>Moving Tips and Hacks</u></li>
                    </ul>
                  </div>
                </details>
              </div>
              <div class="container">
                <h1></h1>
                <details>
                  <summary>Can I Help The Removalists Load The Truck?</summary>
                  <div className="paragraph">
                    While each moving company is different, it is generally best
                    left to the professionals for an effective removal service.
                    While you can help the removalists with smaller items, the
                    process will go faster if you let them do the job,
                    particularly as this will help avoid injuries.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default Faq;
