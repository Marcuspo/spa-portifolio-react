import React, { Component } from "react";
import Header from "./components/header/Header.js";
import Main from "./main.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
