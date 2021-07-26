import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";
import "./styles.css";

const customHistory = createBrowserHistory({
  // basename: config.urlBasename || ""
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={customHistory} forceRefresh={true}>
      <Route component={({history}) => {
        window.appHistory = history;
        return <App />;
      }}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
