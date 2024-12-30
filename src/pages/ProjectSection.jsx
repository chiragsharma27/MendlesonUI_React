import React from "react";
import BorderBottom from "../components/Borders";
import Project2 from ".././assets/images/Our Project _ 2 img 1.png";
import Project3 from ".././assets/images/Our Project_ 3 img 1.png";
import City from ".././assets/images/Our Project_ 1 img 1.png";

const ProjectSection = () => {
  return (
    <div id="project" className="project" style={{ marginTop: "119px" }}>
      <div className="project-header">
        <h1 className="project-heading" style={{ fontSize: "48px" , textAlign:"center"}}>OUR PROJECTS</h1>
        <BorderBottom pw="362px" cw="103px"  center={true} />
      </div>
      <div className="project-gallery" >
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <div className="project1 project-body mb-3 mb-lg-3 text-xl-end text-lg-center text-md-center">
              <img className="project-image" src={City} alt="project" />
              <div id="p1" className="project-text">
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="project2 project-body mb-3 text-lg-center text-md-center">
                <img className="project-image" src={Project2} alt="project" style={{height:"322px"}}/>
                <div id="p2" className="project-text">

                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="project3 project-body mt-4 text-lg-center text-md-center">
                <img className="project-image" src={Project3} alt="project" style={{height:"322px"}} />
                <div id="p3" className="project-text">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;