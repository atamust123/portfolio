import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/svg/logo.svg";
import linkedin from '../assets/svg/linkedin.svg';
import twitter from '../assets/svg/twitter.svg';
import github from '../assets/svg/github.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target="_blank" href="https://linkedin.com/in/atakan-ayyildiz" rel="noreferrer"><img src={linkedin} alt="" /></a>
                            <a target="_blank" href="https://twitter.com/atakanayyildiz0" rel="noreferrer"><img src={twitter} alt="" /></a>
                            <a target="_blank" href="https://github.com/atamust123" rel="noreferrer"><img src={github} alt="" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}