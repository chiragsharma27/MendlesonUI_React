import React from "react";
import { Col, Container } from "reactstrap";
import clientdata1 from "../components/ClientsData1";
import clientdata2 from "../components/ClientsData2";
import CommonComponent from "../components/CommonComponent";
import asset12 from "../assets/images/assets-9-1.png";

const ClientSection = () => {
  return (
    <div id="client">
      <img src={asset12} className="asset12" alt="" />
      <div className="client-container">
        <Container className="mt-5">
          <div className="client-heading">
            <h1 className="ourclient-heading" style={{ fontSize: "48px" }}>OUR CLIENTS</h1>
            <CommonComponent
              textAlign={"center"}
              flexDirection={"center"}
              height1={"7px"}
              height2={"2px"}
              width1={"95px"}
              width2={"200px"}
            />
          </div>

          <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
            {clientdata1.map((item) => (
              <Col key={item.index}>
                <img src={item.img} className="client-images" alt="noimg"/>
              </Col>
            ))}
          </div>
          <div className="d-flex flex-wrap justify-content-center align-items-center mt-5 ps-3 gap-2">
            {clientdata2.map((item) => (
              <Col key={item.index}>
                <img src={item.img} className="client-images" alt="noimg"/>
              </Col>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ClientSection;