import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import CardBackground from "../assets/CardBackground.PNG";
import Slide from "react-reveal/Slide";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";

//  src={CardBackground}>
function Project1() {
  return (
    <>
      <div id="projects" className="space"></div>
      <div className="space"></div>
      <div className="title-div">
        <h1 className="titles">Projects</h1>
      </div>
      <Container>
        <Slide left cascade>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
          <div>
            <div className="big">
              <div className="small">
                <a target="_blank" href="https://www.learnpunjabi.info/">
                  <Image
                    fluid
                    className="pokemon1"
                    src="https://images.pexels.com/photos/7340914/pexels-photo-7340914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
                </a>
              </div>
              <div className="small">
                <div className="smalltext">
                  <h1>MERN LearnPunjabi</h1>
                  <p>
                    Full featured ecommerce store built with MERN stack and
                    Paypal payments API. Admin page to manage customers,
                    products & orders.
                  </p>
                  <p>Working on backend.</p>
                  <p>Present. Set on private. Message me for code.</p>
                </div>
              </div>
            </div>
            <div className="big">
              <div className="small">
                <a
                  target="_blank"
                  href="https://majestic-blini-d3bd31.netlify.app/"
                >
                  <Image
                    fluid
                    className="pokemon1"
                    src="https://images.pexels.com/photos/995300/pexels-photo-995300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
                </a>
              </div>
              <div className="small">
                <div className="smalltext">
                  <h1>MERN LearnPunjabi</h1>
                  <p>
                    Full featured ecommerce store built with MERN stack and
                    Paypal payments API. Admin page to manage customers,
                    products & orders.
                  </p>
                  <p>Working on backend.</p>
                  <p>Present. Set on private. Message me for code.</p>
                </div>
              </div>
            </div>
            <div className="big">
              <div className="small">
                <a
                  target="_blank"
                  href="https://charming-chaja-9c7488.netlify.app/"
                >
                  <Image
                    fluid
                    className="pokemon1"
                    src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
                </a>
              </div>
              <div className="small">
                <div className="smalltext">
                  <h1>Movie App</h1>
                  <p>
                    Search movies and get all results. Popular section showing
                    the most popular movies up to date.
                  </p>
                  <a
                    href="https://github.com/karan353?tab=repositories"
                    target="_blank"
                    className="home2-icons"
                  >
                    <UseAnimations animation={github} size={36} />
                  </a>
                </div>
              </div>
            </div>
            <div className="big">
              <div className="small">
                <a
                  target="_blank"
                  href="https://polite-medovik-e162fb.netlify.app/"
                >
                  <Image
                    fluid
                    className="pokemon1"
                    src="https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  />
                </a>
              </div>
              <div className="small">
                <div className="smalltext">
                  <h1>Weather App</h1>
                  <p>
                    Search for any city and returns live weather discription,
                    using OpenWeather API.
                  </p>
                  <a
                    href="https://github.com/karan353?tab=repositories"
                    target="_blank"
                    className="home2-icons"
                  >
                    <UseAnimations animation={github} size={36} />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="big">
            <div className="small-2">
              <div className="smalltext">
                <h1>MERN BarberShop</h1>
                <p>• Establish an interactive and dynamic website</p>
                <p>• Establish user friendly website</p>
                <p>Present. Set on private. Message me for code.</p>
              </div>
            </div>
            <div className="small">
              <a
                href="https://628510ad33da252faceec6e8--majestic-blini-d3bd31.netlify.app/"
                target="_blank"
              >
                <Image
                  fluid
                  className="pokemon1"
                  src="https://images.pexels.com/photos/995300/pexels-photo-995300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </a>
            </div>
          </div> */}
          </div>
        </Slide>
      </Container>
    </>
  );
}

export default Project1;
