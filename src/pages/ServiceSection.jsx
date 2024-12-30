import React from "react";
import { Col, Container, Row } from "reactstrap";
import data from "../../src/components/DataFile";
import CommonComponent from "../components/CommonComponent";
import asset5 from "../../src/assets/images/Asset 5 1.png";
import asset6 from "../../src/assets/images/Asset 6 1 (1).png";
import asset7 from "../../src/assets/images/Asset 7 1 (1).png";
import asset8 from "../../src/assets/images/Asset 8 2.png";
import asset10 from "../../src/assets/images/Asset 5 2 (1).png";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceSection = () => {
  return (
    <div className="services-container mt-5" id="service">
      <img src={asset5} className="asset5" alt="noimg"/>
      <img src={asset6} className="asset6" alt="noimg"/>
      <img src={asset7} className="asset7" alt="noimg"/>
      <img src={asset8} className="asset8" alt="noimg"/>
      <img src={asset10} className="asset10" alt="noimg"/>

      <Container>
        <div className="services-text">
          <CommonComponent
            textAlign={"center"}
            flexDirection={"center"}
            height1={"7px"}
            height2={"2px"}
            width1={"60px"}
            width2={"170px"}
            text={"SERVICES"}
          />
        </div>
        {data.map((item, index) => {
          return (
            <Row className="mt-5 gx-5">
              <Col
                key={item.index}
                className={`${item.order ? "order-1" : "order-2"} mt-5 `}
              >
                <div>
                  <p
                    className={` ${
                      item.order ? "text-end" : "text-start"
                    }   service-text-head `}
                  >
                    {item.imgHeading}
                  </p>
                  <p
                    className={` ${
                      item.order ? "text-end" : "text-start"
                    }   service-text-content `}
                  >
                    {item.imgText}
                  </p>
                </div>
              </Col>
              <Col
                key={item.index}
                className={`${item.order ? "order-2" : "order-1"} `}
              >
                <img src={item.imgLink} className="services-img order-2 " alt="noimg"/>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default ServiceSection;