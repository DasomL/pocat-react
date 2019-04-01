import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/home";
import Join from "./routes/join";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: auto;
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/join" component={Join} />
        </Router>
      </>
    );
  }
}

export default App;
