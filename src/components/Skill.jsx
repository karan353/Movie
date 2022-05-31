import React from "react";
import Bounce from "react-reveal/Bounce";

const Skill = () => {
  return (
    <section>
      <div className="space"></div>

      <h1 className="titles">Skills & Tools</h1>
      <div className="skills-container">
        <Bounce bottom cascade>
          <div className="skill">
            <img
              src="./images/icons/javascript-original.svg"
              alt="Javascript"
              loading="lazy"
              width="64px"
              height="64px"
            />
            <h6 className="skill-title">Javascript</h6>
          </div>
          <div className="skill">
            <img
              src="./images/icons/react-original.svg"
              alt="React JS"
              loading="lazy"
              width="64px"
              height="64px"
            />
            <h6 className="skill-title">React JS</h6>
          </div>
          <div className="skill">
            <img
              src="./images/icons/nodejs-original.svg"
              alt="Node JS"
              loading="lazy"
              width="64px"
              height="64px"
            />
            <h6 className="skill-title">Node JS</h6>
          </div>
          <div className="skill">
            <img
              src="./images/icons/mongodb-original.svg"
              alt="MongoDB"
              loading="lazy"
              width="64px"
              height="64px"
            />
            <h6 className="skill-title">MongoDB</h6>
          </div>
          <div className="skill">
            <img
              src="./images/icons/html5-original.svg"
              alt=" HTML 5"
              loading="lazy"
              width="64px"
              height="64px"
            />
            <h6 className="skill-title">HTML 5</h6>
          </div>
          <div className="skill">
            <img
              src="./images/icons/css3-original.svg"
              alt="CSS 3"
              loading="lazy"
              width="64px"
              height="64px"
            />
            <h6 className="skill-title">CSS 3</h6>
          </div>
        </Bounce>
      </div>
    </section>
  );
};

export default Skill;
