import * as React from "react";
import { Col, Container, Row } from "reactstrap";

import logo from "./../logo.svg";

export const Home = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React text</h1>
        </header>
        <Container>
            <Row>
                <Col>
                    <p className="App-intro mt-4">Get Started with Boostrap 4 !</p>
                </Col>
            </Row>
        </Container>
        <div className="container-fluid">
            <div className="row">
                <div className="col">1 of 2</div>
                <div className="col">2 of 2</div>
            </div>
            <div className="row">
                <div className="col">1 of 3</div>
                <div className="col">2 of 3</div>
                <div className="col">3 of 3</div>
            </div>
        </div>
    </div>
)

