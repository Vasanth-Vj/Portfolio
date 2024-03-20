import React from "react";
import "./Project.css";
import IMG1 from "../../assests/3d.png";

function Project() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "My 3D Portfolio",
      github: "https://github.com/Vasanth-Vj/Portfolio",
      demo: "https://vasanthtech.netlify.app",
    },
    {
      id: 2,
      image: IMG1,
      title: "My 3D Portfolio",
      github: "https://github.com/Vasanth-Vj/Portfolio",
      demo: "https://vasanthtech.netlify.app",
    },
    {
      id: 3,
      image: IMG1,
      title: "My 3D Portfolio",
      github: "https://github.com/Vasanth-Vj/Portfolio",
      demo: "https://vasanthtech.netlify.app",
    },
    {
      id: 4,
      image: IMG1,
      title: "My 3D Portfolio",
      github: "https://github.com/Vasanth-Vj/Portfolio",
      demo: "https://vasanthtech.netlify.app",
    },
    {
      id: 5,
      image: IMG1,
      title: "My 3D Portfolio",
      github: "https://github.com/Vasanth-Vj/Portfolio",
      demo: "https://vasanthtech.netlify.app",
    },
    {
      id: 6,
      image: IMG1,
      title: "My 3D Portfolio",
      github: "https://github.com/Vasanth-Vj/Portfolio",
      demo: "https://vasanthtech.netlify.app",
    },
  
  ];
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  // target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  // target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Project;
