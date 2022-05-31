import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../logo.svg";
import "./App.css";

function Footer() {
  return (
    <>
      <Container fluid className="footer-">
        <Container>
          <Row>
            <Col className="powerd-by">
              <span>This Website is powered by</span>
              <span>
                <img src={logo} className="App-logo" alt="React logo" />
              </span>
            </Col>
            <Col className="footer-right">
              <p>Copyright © 2022</p>
              <p>All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="footer-bottom-container">
        <div className="footer-bottom">Made with ❤️ by Karan Singh</div>
      </div>
    </>
  );
}

export default Footer;
