import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Masum Reza </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            I am currently employed as a software developer at <span className="purple">Antino Labs.</span>
            <br />
            I have completed Integrated <span className="purple">bachelor's</span>  in  <span className="purple">computer science</span> at Brainware
            University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Internet
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Netflix
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Masum</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
