import React from "react";
import {render} from "react-dom";
import CamelotWheel from "./components/CamelotWheel";
import "./components/camelot.css";

const App = () => (
  <div id="camelot-container">
    <CamelotWheel/>
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
