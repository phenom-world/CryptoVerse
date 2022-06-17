import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "antd/dist/antd.css";
import store from "./app/store";

// ReactDOM.render(
//   <Router>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </Router>,
//   document.getElementById("root")
// );
createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
