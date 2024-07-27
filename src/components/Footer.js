import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo1 from '../assets/img/logo1.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo1} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/deepanshu-s-7677a4103/' target='blank'><img src={navIcon1} alt='linkedin' /></a>
                            <a href='https://www.facebook.com/deeps4829' target='blank'><img src={navIcon2} alt='facebook' /></a>
                            <a href='https://github.com/Deepanshu121020' target='blank'><img src={navIcon3} alt='github' /></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved By Deepanshu Sharma</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}