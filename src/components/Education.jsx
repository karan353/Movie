import React from "react";
import { Container, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";

function Education() {
  return (
    <div>
      <div id="education" className="space"></div>
      <div id="education" className="space"></div>
      <Container id="education">
        {/* <Experience /> */}
        <Col>
          <Zoom cascade>
            <div>
              <br />
              <br />
              <h3 className="text">Courses and Certificates</h3>
              <br />

              <img
                className="course-logo"
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              />
              <br />
              <br />
              <h5>Responsive Web Design with HTML5 and CSS3 - Advanced</h5>
              <h7>Paul Cheney, Web Designer and Developer</h7>
              <br />
              <br />
              <br />
              <h5>The Web Developer Bootcamp 2022</h5>
              <h7>Colt Steele, Developer and Bootcamp Instructor</h7>
              <br />
              <br />
              <br />
              <h5>JavaScript: Understanding the Weird Parts</h5>
              <h7>Anthony Alicea, Software Developer, Architect, and UX</h7>
              <br />
              <br />
              <br />
              <h5>Build Web Apps with React & Firebase</h5>
              <h7>
                The Net Ninja (Shaun Pelling), Online Coding Tutor & Net Ninja
              </h7>
              <br />
              <br />
              <img
                className="course-logo"
                src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:120/https://file-uploads.teachablecdn.com/be9f614a58674fe1a67044fb1158fff1/79b0bba8c4c441e5bbe715364cb9e770"
              />
              <br />
              <br />
              <br />
              <h5>The Ultimate JavaScript Mastery Series - Part 1</h5>
              <h7>Mosh Hamedani</h7>
              <br />
              <br />
              <br />
              <h5>The Ultimate JavaScript Mastery Series - Part 2</h5>
              <h7>Mosh Hamedani</h7>
              <br />
              <br />
              <br />
              <h5>Mastering React</h5>
              <h7>Mosh Hamedani</h7>
              <br />
              <br />
              <br />
            </div>
          </Zoom>
        </Col>
        <Col>
          <Roll bottom cascade>
            <div>
              <h1>Books</h1>
              <img
                className="books"
                src="https://images-na.ssl-images-amazon.com/images/I/31b4K-hFH-L._SX395_BO1,204,203,200_.jpg"
              />
              <img
                className="books"
                src="https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX258_BO1,204,203,200_.jpg"
              />
              <img
                className="books"
                src="https://images-na.ssl-images-amazon.com/images/I/510JjoNTdOL._SX379_BO1,204,203,200_.jpg"
              />
              <img
                className="books"
                src="https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg"
              />
            </div>
          </Roll>
        </Col>
      </Container>
    </div>
  );
}

export default Education;
