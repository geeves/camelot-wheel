import React from "react";
import {render} from "react-dom";
import Camelot from "./components/CamelotWheel";
import "./components/camelot.css";

const App = () => (
  <div id="camelot-container">
    <Camelot/>
  </div>
);

const renderCamelotWheel = () => {
  render(
    <React.Fragment>
      <App/>
    </React.Fragment>,
    document.getElementById("main")
  );
};//


window.addEventListener("DOMContentLoaded", () => {
  renderCamelotWheel();
});
