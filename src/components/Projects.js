import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "NGO Website",
      description: "Designed a user-friendly website for an NGO to help them reach and engage more people effectively.",
      imgUrl: projImg1,
    },
    {
      title: "Automatic Sanitizer Dispenser",
      description: "Developed an automatic sanitizer dispenser using sensor technology for touch-free, efficient, and hygienic dispensing.",
      imgUrl: projImg2,
    },
    {
      title: "Fire-Fighting Robot",
      description: "Made a fire-fighting robot using Arduino-Nano",
      imgUrl: projImg6,
    },
    {
      title: "Ez-Tie",
      description: "Designed auto-lacing shoes which tightens the laces on a tap",
      imgUrl: projImg4,
    },
    {
      title: "Student Management System",
      description: "Student Management System built with Python Tkinter, designed for efficient student data management, including adding, updating, and viewing records in a user-friendly interface.",
      imgUrl: projImg5,
    },
    {
      title: "Jewellery Website",
      description: "Designed an elegant and user-friendly website for a jewelry shop, focused on showcasing products with a luxurious, visually appealing interface.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my diverse projects, showcasing my skills and dedication across various domains.
                   Each project reflects my problem-solving abilities,
                   technical expertise, and commitment to delivering high-quality solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
