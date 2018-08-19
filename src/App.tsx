import * as React from "react";
import { Col, Container, Row } from "reactstrap";

import "./App.css";
import logo from "./logo.svg";

interface IPropsType {
  text?: string;
}

class App extends React.Component<IPropsType, {}> {
  // constructor(props: any){
  //   super(props);
  // }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.props.text}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Container>
          <Row>
            <Col>Get Started with Boostrap 4 !</Col>
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
    );
  }
}

export default App;
