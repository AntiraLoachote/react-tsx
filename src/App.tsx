import * as React from "react";
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
      </div>
    );
  }
}

export default App;
