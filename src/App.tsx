import * as React from "react";
import { Route, Switch } from 'react-router-dom';

import "./App.css";
import { Home } from "./component/home";



class App extends React.Component {
  // constructor(props: any){
  //   super(props);
  // }

  public render() {
    // tslint:disable-next-line:no-console
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
      <Switch>
         <Route exact={true} path={'/'} component={Home} />
      </Switch>
    );
  }
}

export default App;
