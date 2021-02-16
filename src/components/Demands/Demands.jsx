import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Demands = () => {
  const { about } = useContext(PortfolioContext);

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
    <section id="demands">
      <Container>
        <Title title="The Frontline Community 3 Demands (FC3D)" />
        <ol>
            <li>
            Comprehensive, independent retesting and comprehensive remediation of Bay View Hunters Point and Treasure Island with full community oversight.
            </li>
            <li>
            Protection of BVHP and Treasure Island residents by relocating them away from contamination, and providing them full compensation, long-term safe housing, and rental support.
            </li>
            <li>
            Guarantees that BVHP and Treasure Island residents will not be evicted in retaliation for speaking out.
            </li>
        </ol>
      </Container>
    </section>
  );
};

export default Demands;
