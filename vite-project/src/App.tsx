import React from "react";
import Exercise1 from "./components/Exercise1";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #181818;
    font-family: 'Segoe UI', Arial, sans-serif;
    min-height: 100vh;
  }
`;

const AppRoot = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppRoot>
      <Exercise1 />
    </AppRoot>
  </>
);

export default App;