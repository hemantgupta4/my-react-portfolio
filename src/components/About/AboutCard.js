import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hemant Gupta </span>
            from <span className="purple"> PrayagRaj, India.</span>
            <br />
            <br />
            Goal-oriented Software Engineer with a passion for crafting exceptional digital solutions. I thrive in dynamic environments, pushing my abilities to achieve excellence. I adapt quickly and turn complex problems into seamless, elegant solutions. Ready to tackle the next big challenge and make a significant impact!            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "From bytes to breakthroughs, engineering a digital revolution!"{" "}
          </p>
          <footer className="blockquote-footer">Hemant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
