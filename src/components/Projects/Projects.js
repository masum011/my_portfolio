import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent Industry  <strong className="purple">Expriences </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Someone Like Me"
              description="a cutting-edge dating platform meticulously crafted with ReactJS, Material-UI, and Tailwind CSS. As the adept administrator, I seamlessly manage user interactions, ensuring a seamless and enjoyable experience. The synergy of these technologies guarantees a visually stunning and intuitively responsive interface. 'Someone Like Me' goes beyond typical dating apps, fostering connections through innovative design and user-friendly functionalities. Embark on a journey of genuine connections with a platform that prioritizes the fusion of technology and romance."
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LionCharge"
              description="Empower your electronic charging experience with our ReactJS-powered web app. Seamlessly blending functionality and user-friendly design, LionCharge simplifies electronic charging processes. Harness the power of ReactJS to ensure a dynamic and responsive interface, providing users with a cutting-edge solution. LionCharge is your go-to platform for efficient, reliable, and technologically advanced electronic charging. Experience the future of charging, where innovation meets convenience, with LionCharge."
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Devlabs"
              description="This EdTech project enables users to purchase courses and offers teachers an opportunity to teach on the platform. It provides a user-friendly interface for course browsing and purchasing, while empowering teachers to create and deliver their own courses. The platform fosters a dynamic learning environment, connecting learners with quality educational content and educators worldwide.

              I worked on the admin portal as well as the WebApp for DevLabs."
              demoLink="https://www.devlabsalliance.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Antino RMS"
              description=" Antino RMS is an internal project of Antino. As a
              frontend developer, I utilized React Redux Toolkit, RESTful API, Redux, and MUI for the layout and CSS for styling. The app
              allows users to fill up their details, including contact
              information, educational background, skills, and experience, and preview the data in real- time."
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
