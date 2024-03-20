import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Skills() {
  return (
    <section id="skills">
      <h5>What technologies I Know</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills_frontend">
          {/* <h3>Frontend Development</h3> */}
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>JavaSript</h4>
              </div>  
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__backend ">
          {/* <h3>Backend Development</h3> */}
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Node Js</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Express JS</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"  />
              <div>
                <h4>AWS</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"  />
              <div>
                <h4>Postman</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"  />
              <div>
                <h4>Git & Git Hub</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
