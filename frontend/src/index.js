import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { UserProvider } from "../src/context/UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
