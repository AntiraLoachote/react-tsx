import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import "./index.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App text="Hi! Pan" />, document.getElementById(
  "root"
) as HTMLElement);
registerServiceWorker();