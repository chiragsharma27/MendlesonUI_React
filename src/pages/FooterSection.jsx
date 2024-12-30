import React from "react";
import facebook from ".././assets/images/facebook 1.png";
import linkedin from ".././assets/images/linkedin 1.png";
import google from ".././assets/images/search 1.png";
const FooterSection = () => {
  return (
    <>
      <footer id="contact" className="footer">
        <div className="footer-head">
          <div className="footer-container">
            <div className="footer-head-social--title footer-primary-text">
              Social
            </div>
            <div className="footer-head-social--links">
              <img src={facebook} alt="social" />
              <span className="sub-text"> Facebook</span>
            </div>
            <div className="footer-head-social--links">
              <img src={linkedin} alt="social" />
              <span className="sub-text"> Linkedin</span>
            </div>
            <div className="footer-head-social--links">
              <img src={google} alt="social" />
              <span className="sub-text"> Google +</span>
            </div>
          </div>
          <div className="head-explore">
            <div className="footer-head-explore--title footer-primary-text">
              Explore
            </div>
            <div className="sub-text">Services</div>
            <div className="sub-text">Team</div>
            <div className="sub-text">Clients</div>
          </div>
          <div className="head-contact">
            <div className="footer-head-contact--title footer-primary-text">
              Contact
            </div>
            <div className="sub-text">Lorem Ipsum dummy address</div>
            <div className="sub-text">used for display</div>
            <div className="sub-text">1234567890</div>
          </div>
          <div className="head-email">
            <div className="footer-head-email--title footer-primary-text">
              Email
            </div>
            <div className="sub-text">mendlesoncommunication@email.com</div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; Copyright 2018 Mendleson Communication Pty Ltd
        </div>
      </footer>
    </>
  );
};
export default FooterSection;