import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../src/components/Header";

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
        <Header />
      </>
    );
  }
}

export default App;
