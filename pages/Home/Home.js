import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./Home.css";
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";
import { useNavigate } from "react-router-dom";
import NavBarLogo from "../../components/NavBar/NavBarLogo/NavBarLogo";
import VideoAnalysis from "../../assets/images/video-analysis.png";
import VideoAnalysis1 from "../../assets/images/video-analytics.png";
import SentimentAnalysis from "../../assets/images/sentiment-analysis.png";
import SeasonTicketHolderRetention from "../../assets/images/season-ticket-holder-retention.png";
import TicketingClusters from "../../assets/images/ticketing-clusters.png";
import PriceElasticity from "../../assets/images/price-elasticity.png";
import EventPropensityModel from "../../assets/images/event-propensity-model.png";
import LeadsGeneration from "../../assets/images/leads-generation.png";
import FanSegmentation from "../../assets/images/fan-segmentation.png";
import SocialMediaHub from "../../assets/images/social-media-hub.png";

const Home = () => {
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    setIsClicked(true);
    navigate("/video-analytics");
  };
  return (
    <div className="home-page-container">
      <div className="home-page">
        <NavBarLogo
          label="Fan Data and Analytics Platform"
          m
          className={`${isMenuOpen ? "home-container-with-nav" : " "}`}
        />
        <SideNavMenu isOpen={isMenuOpen} toggleMenu={handleToggleClick} />
      
      <div
        className={`container-fluid ${
          isMenuOpen ? "home-container-with-nav" : "home-container"
        }`}
      >
        <div className="row  g-4">
        <h1 className="text-white d-flex justify-content-start py-2 ps-3">Solutions</h1>
        </div>
        <div className="row  g-4">
          <div className="col-3">
            <div className="text-white d-flex justify-content-start border-bt p-2">Sponsorship</div>
            <div className="row">
              <div className="card mt-3" onClick={()=> handleClick()}>
                <div className="row g-0 align-content-center">
                  <div className="col-5 d-flex justify-content-center p-3">
                    <img
                      src={VideoAnalysis1}
                      className="img-fluid"
                      alt="video-analysis"
                    />
                  </div>
                  <div className="col-7">
                    <div className="card-body  d-flex flex-wrap ">
                      <p className="card-text text-white">Video Analysis</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* second card */}
              <div className="card mt-3">
                <div className="row g-0 align-content-center">
                  <div className="col-5 d-flex justify-content-center p-3">
                    <img
                      src={SentimentAnalysis}
                      className="img-fluid"
                      alt="video-analysis"
                    />
                  </div>
                  <div className="col-7">
                    <div className="card-body d-flex flex-wrap">
                      <p className="card-text text-white">Sentiment Analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Col second */}
          <div className="col-6 text-white">
            <div className="text-white d-flex justify-content-start border-bt p-2">Ticketing</div>
           
              <div className="d-flex">
              {/* 2 of three columns col 1 */}
                <div className="col">
                  <div className="card mt-3">
                    <div className="row g-0 align-content-center">
                      <div className="col-5 d-flex justify-content-center p-3">
                        <img
                          src={SeasonTicketHolderRetention}
                          className="img-fluid"
                          alt="Season Ticket Holder Retention"
                        />
                      </div>
                      <div className="col-7">
                        <div className="card-body d-flex flex-wrap">
                          <p className="card-text text-white">
                            Season Ticket Holder Retention
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* second card */}
                  <div className="card mt-3">
                    <div className="row g-0 align-content-center">
                      <div className="col-5 d-flex justify-content-center p-3">
                        <img
                          src={TicketingClusters}
                          className="img-fluid"
                          alt="Ticketing Clusters"
                        />
                      </div>
                      <div className="col-7">
                        <div className="card-body d-flex flex-wrap">
                          <p className="card-text text-white">Ticketing Clusters</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* third card */}
                  <div className="card mt-3">
                    <div className="row g-0 align-content-center">
                      <div className="col-5 d-flex justify-content-center p-3">
                        <img
                          src={PriceElasticity}
                          className="img-fluid"
                          alt="Price Elasticity"
                        />
                      </div>
                      <div className="col-7">
                        <div className="card-body d-flex flex-wrap">
                          <p className="card-text text-white">Price Elasticity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2 of three columns col 2 */}
                <div className="col">
                  <div className="card mt-3">
                    <div className="row g-0 align-content-center">
                      <div className="col-5 d-flex justify-content-center p-3">
                        <img
                          src={EventPropensityModel}
                          className="img-fluid"
                          alt="Event Propensity Model"
                        />
                      </div>
                      <div className="col-7">
                        <div className="card-body  d-flex flex-wrap ">
                          <p className="card-text text-white">Event Propensity Model</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* second card */}
                  <div className="card mt-3">
                    <div className="row g-0 align-content-center">
                      <div className="col-5 d-flex justify-content-center p-3">
                        <img
                          src={LeadsGeneration}
                          className="img-fluid"
                          alt="Leads Generation"
                        />
                      </div>
                      <div className="col-7">
                        <div className="card-body d-flex flex-wrap">
                          <p className="card-text text-white">Leads Generation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-3 text-white">
            <div className=" text-white d-flex justify-content-start border-bt p-2">Fan Engagement</div>
          <div className="row">
          <div className="card mt-3">
                <div className="row g-0 align-content-center">
                  <div className="col-5 d-flex justify-content-center p-3">
                    <img
                      src={SocialMediaHub}
                      className="img-fluid"
                      alt="Social MediaHub"
                    />
                  </div>
                  <div className="col-7">
                    <div className="card-body d-flex flex-wrap">
                      <p className="card-text text-white">Social MediaHub</p>
                    </div>
                  </div>
                </div>
              </div>
          
              
              {/* second card */}
              <div className="card mt-3">
                <div className="row g-0 align-content-center">
                  <div className="col-5 d-flex justify-content-center p-3">
                    <img
                      src={FanSegmentation}
                      className="img-fluid"
                      alt="Fan Segmentation"
                    />
                  </div>
                  <div className="col-7">
                    <div className="card-body  d-flex flex-wrap ">
                      <p className="card-text text-white">Fan Segmentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
