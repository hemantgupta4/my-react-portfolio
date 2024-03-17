import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="PredictivePay"
              description="Developed a predictive model in Python using machine learning techniques to forecast invoice payment dates accurately. Additionally, crafted a user-friendly full-stack web application for efficient employee data management, ensuring seamless API functionality for dataset manipulation."
              ghLink="https://github.com/hemantgupta4/HRC_winter_internship"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="WeatherWise"
              description="WeatherWise is a real-time weather app leveraging the OpenWeather API. It provides users with instant access to accurate and up-to-date weather information for any city or location. With WeatherWise, users can easily retrieve weather details on-the-go, ensuring they stay informed about current weather conditions wherever they are."
              ghLink="https://github.com/hemantgupta4/Real-time-Weather-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              title="My old Portfolio"
              description="It is a personal website showcasing my skills, projects, and achievements using HTML, CSS, and JavaScript. It features a clean and minimalist design, highlighting key information such as my bio, resume, and contact details. The site is responsive, ensuring optimal viewing across various devices"
              ghLink="https://github.com/hemantgupta4/hemanrgupta.github.io"
              demoLink="https://hemantgupta4.github.io/hemanrgupta.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              title="SecureDonation"
              description="Implemented RazorPay gateway on website for safe online contributions. Users can donate securely through the integrated platform, ensuring their financial information remains protected. Simplifying the donation process, it fosters trust and encourages support for various causes."
              ghLink="https://github.com/hemantgupta4/sparkfoundation.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              title="VoiceBot Sweep"
              description="a voice-controlled robot equipped with Bluetooth, ultrasonic sensors, and IoT capabilities. It autonomously vacuums and mops while intelligently navigating obstacles. Utilizing advanced voice recognition, users can effortlessly interact and command SmartClean for a hassle-free cleaning experience."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
