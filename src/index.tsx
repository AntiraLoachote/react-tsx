import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import "./index.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App text="+ TypeScript" />, document.getElementById(
  "root"
) as HTMLElement);
registerServiceWorker();
