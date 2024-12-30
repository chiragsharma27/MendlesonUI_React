import React from "react";
import group1 from "../assets/images/Group 1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import asset4 from "../assets/images/Assets 4.png";

const HeroSection = () => {
  return (
    <div className="hero1" >
      <div>
      <Container>
        <Row>
          <Col md="12" lg="6">
            <img className="group1" src={group1} alt="" />
          </Col>
          <Col xs md="12" lg="6">
            <div className="hero-heading">
              <h1 className="home-heading rubik-regular">Mendleson</h1>
              {/* <br /> */}
              <h1 className="home-heading rubik-regular">Communication</h1>
              {/* <br /> */}
              <h1 className="home-heading rubik-regular">and Engagement</h1>
            </div>
            <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.
            </p>
            <img src={asset4} className="asset4" alt="" srcset="" />
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default HeroSection;