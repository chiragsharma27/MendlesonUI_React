import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutimg from "../assets/images/about us 1.png";
import lineimg from "../assets/images/Group 30.png";
import Engagementicon from "../assets/images/Enagagement icon 1.png";
import Communicationicon from "../assets/images/coomunication icon 1.png";

const AboutUS = () => {
  return (
    <>
      <Container className="aboutcontainer">
        <Row>
          <Col md="12" lg="6">
            <div className="aboutSection">
              <div>
                <img
                  src={aboutimg}
                  className="aboutimg"
                  alt="hello"
                  srcset=""
                />
              </div>
              <Col>
                <div className="aboutus">
                  <h1>ABOUT US</h1>
                  <img src={lineimg} alt="" />
                  <p className="about-para">
                    We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
                  </p>
                  <div className="about-content">
                    <div>
                      <img
                        src={Engagementicon}
                        className="Engagementicon"
                        alt="noimg"
                      />
                      <h1 className="engagement-text">ENGAGEMENT</h1>
                      <p className="engagement-para" >
                        We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.
                      <br />READ MORE
                      </p>
                    </div>

                    <div className="communication-content">
                      <img
                        src={Communicationicon}
                        className="communicationicon"
                        alt=""
                      />
                      <h1 className="communication-text">COMMUNICATION</h1>
                      <p className="communication-para">
                        We are award-winning leaders in communications and campaign management.
                        READ MORE
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUS;
