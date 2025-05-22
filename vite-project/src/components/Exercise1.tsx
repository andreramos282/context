import React from "react";
import styled from "styled-components";
import { NameProvider } from "./NameContext";
import Input from "./Input";
import Display from "./Display";

const Container = styled.div`
  background: #212121;
  border: 1px solid #8883;
  border-radius: 10px;
  padding: 24px 20px;
  display: inline-block;          
  min-width: 270px;               
  max-width: 90vw;                
`;

const Exercise1: React.FC = () => (
  <NameProvider>
    <Container>
      <Input />
      <Display />
    </Container>
  </NameProvider>
);

export default Exercise1;