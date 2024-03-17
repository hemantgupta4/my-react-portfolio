import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import Jupyter from "../../Assets/Jupyter.png";
import eclipse from "../../Assets/eclipse.399693baac111c8b041d.png";
import anaconda from "../../Assets/anaconda.png";




function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src={anaconda} alt="Jupyter" style={{ width: '110px', height: 'auto' }}/> 
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src={Jupyter} alt="Jupyter" style={{ width: '110px', height: 'auto' }}/> 
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src={eclipse} alt="eclipse" style={{ width: '110px', height: 'auto' }}/> 
      </Col>

    </Row>
  );
}

export default Toolstack;
