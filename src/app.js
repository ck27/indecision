import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp";
import ReactModal from "react-modal";

import "normalize.css/normalize.css";
import "./styles/app.scss";


console.log('no live server');
ReactDOM.render(<IndecisionApp options={["GoT","Friends","Money Heist"]}/>, document.getElementById("app"));

// To handle warning thrown by react-modal
ReactModal.setAppElement(document.getElementById("app"));