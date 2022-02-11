import React from "react";
import ReactDOM from "react-dom";
import logo from "./images/logo.jpg";
import Script from "./script";
import "./style.css";

ReactDOM.render(
  <div>
    <center>
      <img className="img" src={logo} />
      <Script />
    </center>
  </div>,
  document.getElementById("root")
);