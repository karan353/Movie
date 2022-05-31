import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { Fade } from "react-reveal";
import Typed from "react-typed";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import homeblue from "./../assets/homeblue.PNG";
import greyfalls from "./../assets/greyfalls.PNG";

function Home2() {
  return (
    <Container>
      <div id="home" className="space"></div>
      <div className="space"></div>
      <div className="space"></div>
      <Row className="home2-row-container" lg>
        <Col className="home2-row-1">
          <h1 className="display-2 karan-1 home2-karan">
            Hi, I'm Karan Singh.
          </h1>
          <Typed
            strings={["MERN Stack Developer"]}
            typeSpeed={100}
            backDelay={15000}
            backSpeed={30}
            loop
          />

          <div>
            <a
              class="btn btn-outline-dark home-button home2-button"
              href="#projects"
            >
              VIEW MY WORK
            </a>
            <a
              class="btn btn-outline-dark home-button home2-button"
              href="#contact"
            >
              GET IN TOUCH
            </a>
            <div className="home2-animation-icons">
              <a
                href="https://github.com/karan353?tab=repositories"
                target="_blank"
                className="home2-icons"
              >
                <UseAnimations animation={github} size={36} />
              </a>
              <a
                href="https://www.linkedin.com/in/karan-singh-267472203"
                target="_blank"
                className="home2-icons"
              >
                <UseAnimations animation={linkedin} size={36} />
              </a>
            </div>
          </div>
        </Col>
        <Col className="home2-col-2" xl>
          <div class="maincountainer">
            <div class="thecard">
              <div class="thefront">
                <Image fluid rounded src={homeblue} />
              </div>
              <div class="theback">
                <Image fluid rounded src={greyfalls} />
              </div>
            </div>
          </div>
          {/* <Image fluid rounded src={homeblue} />

          <Image fluid rounded src={greyfalls} /> */}
        </Col>
        <Col className="home2-row-3" lg>
          <div className="home2-experience">
            <p>POSITION: Avaliable</p>
            <p>EXPERIENCE: 2 Years</p>
          </div>
          <Fade right cascade>
            <div className="home2-about">
              <p class="lead">
                I am from Toronto, Ontario and currently living in Niagara
                Falls. I enjoy building projects that are meaningful and are
                beautiful user experiences.
              </p>
              <p class="lead">
                Passionate about Web Design & Development. I inspire making
                websites that clearly communicate with visitors and interactive
                to make it enjoyable.
              </p>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
