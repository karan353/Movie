import React from "react";
import "./App.css";
import { Container, Image, Row, Col } from "react-bootstrap";
import Shaqay from "../assets/Shaqay.PNG";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";

function Projects() {
  return (
    <>
      <div id="projects" className="space"></div>

      <Container fluid>
        <div className="title-div">
          <h1 className="titles">Projects</h1>
        </div>
      </Container>
      <Container fluid>
        <Row className="project-contanier">
          <Col className="project-box" lg>
            <div>
              <h1>MERN LearnPunjabi</h1>
              <p>
                Full featured Barber store built with MERN stack and booking
                system. Admin page to manage customers, products & orders.
              </p>
              <UseAnimations animation={github} size={36} />
              <UseAnimations animation={linkedin} size={36} />
            </div>
          </Col>
          <Col className="project-box" lg>
            <a href="https://www.shaqay.com/" target="_blank">
              <Image fluid className="image-styles middle" src={Shaqay} />
            </a>
            <h4 className="sub-titles">
              <a
                className="sub-titles"
                href="https://www.shaqay.com/"
                target="_blank"
              >
                Shaqay
              </a>
            </h4>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="project-contanier">
          <Col className="project-box " lg>
            <a target="_blank" href="https://www.learnpunjabi.info/">
              <Image
                fluid
                className="image-styles middle"
                src="https://images.pexels.com/photos/7340914/pexels-photo-7340914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </a>
            <h4 className="sub-titles">
              <a
                className="sub-titles"
                target="_blank"
                href="https://www.learnpunjabi.info/"
              >
                LearnPunjabi
              </a>
            </h4>
          </Col>
          <Col className="project-box center" lg>
            <div>
              <h1>MERN LearnPunjabi</h1>
              <p>
                Full featured Barber store built with MERN stack and booking
                system. Admin page to manage customers, products & orders.
              </p>
              <UseAnimations animation={github} size={36} />
              <UseAnimations animation={linkedin} size={36} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="project-contanier">
          <Col className="project-box center" lg>
            <div>
              <h1>MERN BarberShop</h1>
              <p>
                Full featured Barber store built with MERN stack and booking
                system. Admin page to manage customers, products & orders.
              </p>
              <UseAnimations animation={github} size={36} />
              <UseAnimations animation={linkedin} size={36} />
            </div>
          </Col>
          <Col className="project-box " lg>
            <a
              href="https://628510ad33da252faceec6e8--majestic-blini-d3bd31.netlify.app/"
              target="_blank"
            >
              <Image
                fluid
                className="image-styles"
                src="https://images.pexels.com/photos/995300/pexels-photo-995300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </a>
            <h4 className="sub-titles">
              <a
                className="sub-titles"
                target="_blank"
                href="https://628510ad33da252faceec6e8--majestic-blini-d3bd31.netlify.app/"
              >
                BarberHQ
              </a>
            </h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
