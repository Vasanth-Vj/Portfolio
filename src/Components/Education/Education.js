import React from "react";
import "./Education.css";
import { BiCheck } from "react-icons/bi";

function Education() {
  return (
    <section id="education">
      <h5>What I Learn</h5>
      <h2>Our Journey</h2>

      <div className="container education__container">
        <article className="education">
          <div className="education__head">
            <h3>SSLC</h3>
          </div>

          <ul className="education__list">
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                I am proud to have completed my 10th standard with an
                outstanding score of 91%.
              </p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                Throughout my academic journey, I have consistently demonstrated
                dedication and passion for learning, reflected in my excellent
                performance across various subjects.
              </p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                My exceptional academic performance is a testament to my hard
                work, determination, and intellectual curiosity.
              </p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                Beyond securing high grades, I actively engage in
                extracurricular activities, further enhancing my holistic
                development.
              </p>
            </li>
          </ul>
        </article>

        <article className="education">
          <div className="education__head">
            <h3>HSC</h3>
          </div>

          <ul className="education__list">
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                I am delighted to have completed my 12th standard with a
                commendable score of 67.8%.
              </p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                This achievement underscores my dedication and perseverance in
                the face of academic challenges, highlighting my commitment to
                continuous improvement and growth.
              </p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                My academic journey has equipped me with a versatile skill set
                and a thirst for knowledge.
              </p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                While my overall percentage is a testament to my hard work and
                dedication, it also underscores my resilience in the face of
                academic rigors.
              </p>
            </li>
          </ul>
        </article>

        <article className="education">
          <div className="education__head">
            <h3>B.E Mechatronics</h3>
          </div>

          <ul className="education__list">
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                I am successfully completed my Bachelor's degree in the
                Mechatronics department with an exceptional score of 80%.
              </p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                This accomplishment reflects my dedication, hard work, and
                passion for the field of mechatronics, as well as my commitment
                to academic excellence.
              </p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                Throughout my undergraduate studies, I have gained a
                comprehensive understanding of mechatronics, which integrates
                mechanical, electrical, and computer engineering principles.
              </p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                I have acquired practical skills in designing, building, and
                analyzing complex electromechanical systems.
              </p>
            </li>
          </ul>
        </article>

        <article className="education">
          <div className="education__head">
            <h3>Fullstack Developer</h3>
          </div>

          <ul className="education__list">
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                Successfully completed an internship focused on mastering the
                MERN (MongoDB, Express.js, React.js, Node.js) stack, a modern
                and widely used technology stack for building dynamic web
                applications.
              </p>
            </li>

            <li>
              <BiCheck className="education__list-icon" />
              <p>
                Developed a fully functional e-commerce website, Created a Todo
                application using MERN stack, allowing users to efficiently
                manage their tasks and Designed and developed a professional
                portfolio website to showcase skills, projects, and experience.
              </p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />
              <p>
                Through these projects, I have gained valuable hands-on
                experience in building full-stack web applications using
                cutting-edge technologies, honing my skills in frontend and
                backend development, database management, and project
                deployment.
              </p>
            </li>
          </ul>
        </article>
      </div>

      <div></div>
    </section>
  );
}

export default Education;
