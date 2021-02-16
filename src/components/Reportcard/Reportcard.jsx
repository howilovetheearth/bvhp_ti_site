import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Accordion from 'react-bootstrap/Accordion';
import $ from "jquery";

const FriendlyToggle = ({ children, report = {}, innerClassName, eventKey, callback }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { src='', grade='', name='' } = report
  // eslint-disable-next-line no-undef
  const onClick = useAccordionToggle(eventKey);
  const rotateClass = 'rotateMe';

  useEffect(() => {
    if (isExpanded) {
      $('.hi').removeClass(rotateClass || '');
      // eslint-disable-next-line no-empty
    } else {
      $('.hi').addClass(rotateClass || '');
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
      <div className={"chevron-icon"}>
        <i className={`${innerClassName || ''} fa fa-chevron-circle-down`} />
      </div>
      <img className="reportcard-image" src={src} alt={name} border="0" />
      <div className="report-grade">
        <h2>
          {name}
        </h2>
        <h2>
          {grade}
        </h2>
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
          <Accordion defaultActiveKey="-1">
            <Card>
              <FriendlyToggle innerClassName={"hi"} eventKey="0" report={reportcard[0]}>
                Click me!
              </FriendlyToggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>I am a good boy</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          {/*           <Accordion defaultActiveKey="0"> */}
{/*           {reportcard.map((report, index) => { */}
{/*             const { src, grade, name } = report; */}
{/*               const row = */}
{/*               (<Row key={name}> */}
{/*                 <Col lg={4} sm={12}> */}
{/*                   <Fade */}
{/*                     left={isDesktop} */}
{/*                     bottom={isMobile} */}
{/*                     duration={1000} */}
{/*                     delay={500} */}
{/*                     distance="30px" */}
{/*                   > */}
{/*                     <div className="reportcard-wrapper__text"> */}
{/*                       <h3 className="reportcard-wrapper__text-title">{name || 'Project Title'}</h3> */}
{/*                       <a> */}
{/*                           <img src={src} alt={name} border="0" /> */}
{/*                       </a> */}
{/*                     </div> */}
{/*                   </Fade> */}
{/*                 </Col> */}
{/*                 <Col lg={8} sm={12}> */}
{/*                   <Fade */}
{/*                     right={isDesktop} */}
{/*                     bottom={isMobile} */}
{/*                     duration={1000} */}
{/*                     delay={1000} */}
{/*                     distance="30px" */}
{/*                   > */}
{/*                     <div className="project-wrapper__image"> */}
{/*                         <Tilt */}
{/*                           options={{ */}
{/*                             reverse: false, */}
{/*                             max: 8, */}
{/*                             perspective: 1000, */}
{/*                             scale: 1, */}
{/*                             speed: 300, */}
{/*                             transition: true, */}
{/*                             axis: null, */}
{/*                             reset: true, */}
{/*                             easing: 'cubic-bezier(.03,.98,.52,.99)', */}
{/*                           }} */}
{/*                         > */}
{/*                         {grade} */}
{/*                         </Tilt> */}
{/*                     </div> */}
{/*                   </Fade> */}
{/*                 </Col> */}
{/*               </Row>); */}

{/*             return ( */}
{/*             <div> */}
{/*               <Accordion.Toggle as={row} eventKey={index}> */}
{/*               </Accordion.Toggle> */}
{/*               <Accordion.Collapse eventKey={index}> */}
{/*                 <div>yo yo </> */}
{/*               </Accordion.Collapse> */}
{/*             </div> */}
{/*             ); */}
{/*           })} */}
        </div>
      </Container>
    </section>
  );
};

export default Reportcard;
