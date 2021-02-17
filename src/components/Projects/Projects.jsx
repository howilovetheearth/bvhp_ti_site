import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <Title title="Allies" />
        <div className="project-wrapper">
          <div id="allies-container">
            {projects.map((project, idx) => {
              const { title, info, info2, url, repo, img, id } = project;
              return (
                <a className="ally" href={url} target="_blank" style={{ order: `${idx}` }}>
                  <span className="ally-img" style={{ backgroundImage: `url('${img}')` }} />
                  <h3>{title}</h3>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
