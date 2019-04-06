import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../src/components/Header";
import Main from "../src/components/Main";

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
        <Main />
      </>
    );
  }
}

export default App;
