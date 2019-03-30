import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from "react-router-bootstrap";
import './Main.css';

class MainContent extends Component {
    render() {
        return (
            <div>
            <header>
                <Container fluid className="text-left text-white main-header" >
                    <h1>Stay hungry. Stay Foolish</h1>
                    <p>
                        Learn from the hottest startups in the world.
                    </p>
                    <LinkContainer to="/stories">
                        <Button variant="primary" className="primary-btn">Read Now</Button>
                    </LinkContainer>           
                </Container>
                <Container fluid className="main-header-section text-center">
                    <h3>Smart Tools for Smart Founders</h3>
                    <p>
                        Learn from the hottest startups in the world.
                    </p>
                </Container>
                <Container className="main-sub-section">
                    <Row >
                        <Col sm className="pt-100 main-sub-section__text">
                            <h1>Only Hottest startups</h1>
                            <p>When you use a theme created by Start Bootstrap, you know that 
                        the theme will look great on any device, whether it's a phone,
                        tablet, or desktop the page will behave responsively!</p>
                        </Col>
                        <Col >  
                            <div className="main-sub-section__image">
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="main-sub-section">
                    <Row>
                        <Col sm  md={{ order: 12 }} className="main-sub-section__text">
                            <h1>Only Hottest startups</h1>
                            <p>When you use a theme created by Start Bootstrap, you know that 
                        the theme will look great on any device, whether it's a phone,
                        tablet, or desktop the page will behave responsively!</p>
                        </Col>
                        <Col >  
                            <div className="main-sub-section__image"></div>
                        </Col>
                    </Row>
                </Container>
                <Container className="main-sub-section">
                    <Row>
                        <Col sm className="main-sub-section__text">
                            <h1>Only Hottest startups</h1>
                            <p>When you use a theme created by Start Bootstrap, you know that 
                        the theme will look great on any device, whether it's a phone,
                        tablet, or desktop the page will behave responsively!</p>
                        </Col>
                        <Col >  
                            <div className="main-sub-section__image"></div>
                        </Col>
                    </Row>
                </Container>
            </header>
            </div>
        )
    }
}

export default MainContent;