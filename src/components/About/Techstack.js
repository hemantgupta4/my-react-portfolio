import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import SQLImage from "../../Assets/database.png";
import MaterialUI from "../../Assets/materialUI.png";
import Spring from "../../Assets/spring.png";





function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src={Spring} alt="Spring" style={{ width: '120px', height: 'auto' }}/> 
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src={MaterialUI} alt="MaterialUI" style={{ width: '120px', height: 'auto' }}/> 
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQLImage} alt="SQL" /> 
      </Col>

    


    </Row>
  );
}

export default Techstack;
