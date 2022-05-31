import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <>
      <div id="about" className="space"></div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="space"></div>
      <Container>
        <Row>
          <Col className="cool" md>
            <Tilt>
              <img
                className="my_image-about"
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364"
              />
            </Tilt>
          </Col>
          <Col md>
            <div className="title-div">
              <h1 className="titles">About Me</h1>
            </div>
            <p class="lead">
              Software development isn't just a job for me. It's offered an
              engaging challenge to continually learn and improve my skills in
              creating high quality clean code. Constantly studying design
              patterns also how to make code reusable.
            </p>
            <p class="lead">
              Graduate of Pre Health but found my college major differs from my
              current pursuits. It’s not been long since I started studying web
              development, merely two-three years ago, and ever since, I’ve been
              building randomized projects. Practice and experience has made me
              a great developer.
            </p>
            <p class="lead">
              I am now looking for industry experience, to learn in a team
              environment and solidify what I’ve learned. Being a self-taught
              developer has put through a great journey because it's taught me
              persistence, time-management, dedication, resourcefulness, and
              motivation to go down the self-taught path.
            </p>
            <p class="lead">
              So, this has been me, Karan Singh! Feel free to contact me or drop
              down your queries, as I’ll be pleased to reply to them!
            </p>
          </Col>
          {/* <Col>
          <div className="title-div">
            <h1 className="titles">About Me</h1>
          </div>
          <p class="lead">
            Hello, I welcome you all to my page! I am Karan Singh. Although I
            was born in Toronto, Canada, I have lived in Niagara since 2006.
          </p>
          <p class="lead">
            I am relatively young, but I’ve been working hard since I was a
            young boy by working with my parents in our motel and working
            various minimum wage jobs(ambassador, cook, Sales associate). After
            highschool, we sold the motel and followed my career of choice
            becoming a health professional and went to school for pre-Health at
            Niagara College. In college is when I started coding on the side,
            because I had a passion to build projects on HTML, JavaScript and
            CSS.
          </p>
          <p class="lead">
            It’s not been long since I started studying web development, merely
            two-three years ago, and ever since, I’ve been building randomized
            projects in the start. I have had help from my entire friend group
            as they’re all Computer Science Majors. In 2021 was when I decided
            that my college major differs from my current pursuits. I have
            managed to garner certifications from Udemy such as Responsive Web
            Design with HTML5 and CSS3 - Advanced and The Web Developer Bootcamp
            2022 and The Ultimate JavaScript Mastery Series - Part 1 as well as
            Part 2, and Mastering React from Mosh.
          </p>
          <p class="lead">
            Through studying these coding languages, I found my interest in
            designing, building, and deploying web development with React, whose
            framework I started in 2021.
          </p>
          <p class="lead">
            Speaking of interests, I am incredibly interested in Web Development
            and PC Video Games, which help me be more inclined towards creating
            better designs. Moreover, I am also interested in Gym, Anime,
            Tennis, and Basketball, and my designs will usually represent some
            elements of my interests.
          </p>
          <p class="lead">
            I hope to land my first-ever job with co-workers so that I can learn
            to code better and faster. I believe my skills and certifications
            will prove an asset to you and your team.
          </p>
          <p class="lead">
            So, this has been me, Karan Singh! Feel free to contact me or drop
            down your queries, as I’ll be pleased to reply to them!
          </p>
        </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default About;
