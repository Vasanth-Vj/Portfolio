import React from "react";
import "./About.css";
import ME from "../../assests/about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Months Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects </h5>
              <small>3+ completed</small>
            </article>
          </div>

          <p>
            "I am a passionate full-stack developer skilled in MERN (MongoDB,
            Express.js, React.js, Node.js) technology, with hands-on experience
            gained through a 3-month internship and successful project
            completions. My dedication to building efficient and user-friendly
            web applications drives my continuous growth in the field.I'm a
            quick learner and collaborate closely with clients to create
            efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to
            life!"
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
