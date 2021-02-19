import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Accordion from 'react-bootstrap/Accordion';
import $ from 'jquery';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const FriendlyToggle = ({ report = {}, eventKey, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { src = '', grade = '', name = '' } = report;
  // eslint-disable-next-line no-undef
  const onClick = useAccordionToggle(eventKey);
  const rotateClass = 'rotateMe';
  const iconClass = `report-icon-section${index}`;

  useEffect(() => {
    if (isExpanded) {
      $(`.${iconClass}`).removeClass(rotateClass || '');
      // eslint-disable-next-line no-empty
    } else {
      $(`.${iconClass}`).addClass(rotateClass || '');
    }
  }, [isExpanded]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className="reportcard-section"
      onClick={(...arg) => {
        onClick(...arg);
        setIsExpanded(!isExpanded);
      }}
    >
      <div className="chevron-icon">
        <i className={`${iconClass} fa fa-chevron-circle-down`} />
      </div>
      <img className="reportcard-image" src={src} alt={name} border="0" />
      <div className="report-grade">
        <h2>{name}</h2>
        <h2>{grade}</h2>
      </div>
    </div>
  );
};

const Reportcard = () => {
  const { reportcard } = useContext(PortfolioContext);

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
    <section id="reportcard">
      <Container>
        <div className="reportcard-wrapper">
          <Title title="Report Card" />
          {reportcard.map((report, index) => {
            return (
              <Accordion defaultActiveKey="-1">
                <Card>
                  <FriendlyToggle eventKey="0" report={report} index={index + 1} />
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="report-expanded-section">
                      <div className="moments-of-action">
                        <h2>Moments of Action</h2>
                      </div>
                      <div className="moments-of-silence">
                        <h2>Moments of Silence</h2>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Reportcard;
