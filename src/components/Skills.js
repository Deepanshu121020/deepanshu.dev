import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import colorSharp from "../assets/img/color-sharp.png"



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
  From designing and building responsive web interfaces using HTML and CSS, to developing interactive applications with<br/> JavaScript and React, and even creating robust backend solutions with Java, my expertise covers both <br/> frontend and backend development. I am committed to continuous learning and improvement to <br/> deliver innovative and effective solutions for your needs.
</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="notavailable"/>
                                    <h5>HTML/CSS</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="notavailable"/>
                                    <h5>JAVASCRIPT</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="notavailable"/>
                                    <h5>REACT</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="notavailable"/>
                                    <h5>JAVA</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="backgroundImageLeft"/>
        </section>
      )
}