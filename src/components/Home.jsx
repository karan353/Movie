import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Asset1 from "./../assets/Asset1.png";
import Typed from "react-typed";
import { Fade, LightSpeed } from "react-reveal";
import Tilt from "react-parallax-tilt";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";

function Home() {
  return (
    <Container id="home" className="home-bottom">
      <Row>
        <Col md className="home-me">
          <div>
            <h1 className="display-2 karan-1">Hi, I'm Karan.</h1>

            <Typed
              strings={["MERN Stack Developer"]}
              typeSpeed={100}
              backDelay={15000}
              backSpeed={30}
              loop
            />
            <Fade left cascade>
              <div>
                <p class="lead">
                  I am from Toronto, Ontario and currently living in Niagara
                  Falls. I enjoy building projects that are meaningful and are
                  beautiful user experiences.
                </p>
                <p class="lead">
                  Passionate about Web Design & Development. I inspire making
                  websites that clearly communicate with visitors and
                  interactive to make it enjoyable.
                </p>
              </div>
            </Fade>
            <div>
              <a class="btn btn-outline-dark home-button" href="#projects">
                VIEW MY WORK
              </a>
              <UseAnimations animation={github} size={26} />
              <a class="btn btn-outline-dark home-button" href="#contact">
                GET IN TOUCH
              </a>
              <UseAnimations animation={linkedin} size={26} />
            </div>
          </div>
        </Col>

        <Col md className="home-me">
          <LightSpeed right>
            <Tilt>
              <img className="my_image" src={Asset1} />
            </Tilt>
          </LightSpeed>
        </Col>
      </Row>

      {/* <div className="containerhome">
        <h1 className="display-2 homeintross">Hi, I'm Karan.</h1>
        <img className="my_image" src={Asset1} />
        <div>
          <p class="lead">
            I am from Toronto, Ontario and currently living in Niagara Falls. I
            enjoy building projects that are meaningful to the public and are
            beautiful user experiences.
          </p>
          <p class="lead">
            Passionate about Web Design & Development. I inspire making websites
            that clearly communicate with visitors and interactive to make it
            enjoyable.
          </p>
          <p class="lead">
            I'm looking to be a Junior React Developer working on web
            applications.
          </p>

          <button type="button" class="btn btn-outline-dark">
            VIEW MY WORK
          </button>
          <button type="button" class="btn btn-outline-dark">
            GET IN TOUCH
          </button>
        </div>
      </div> */}
    </Container>
  );
}

export default Home;
