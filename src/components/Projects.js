import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Crete Company Portfolio",
      description: `Front-End - React, React Router, TailwindCSS\n
                    Libraries and Tools - ReactIcons, FontAwesomeIcons`,
      imgUrl: projImg1,
      projectLink: 'https://crete-website.vercel.app/'
    },
    {
      title: "Personal Portfolio Website",
      description: `Front-End - HTML,CSS,JS\n`,
      imgUrl: projImg2,
      projectLink: 'https://deepanshu121020.github.io/FrontEnd_Portfolio/'
    },
    {
      title: "Weather Application",
      description: `Front-End - React, Bootstrap, Javascript\n
                    Libraries and Tools - Chart.jsn Unicons, Toastify
                    Backend - NewsAPI`,
      projectLink:  'https://weather-forecaster-bay.vercel.app/',
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
                <p>
  Explore the projects below to see how I combine front-end and back-end technologies, libraries, and tools to build intuitive and efficient applications. Stay tuned for more exciting projects as I continue to innovate and grow.
</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          <h1> More Projects Coming Soon...</h1>
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="background" src={colorSharp2}></img>
    </section>
  )
}
