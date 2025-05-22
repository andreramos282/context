import React from "react";
import styled from "styled-components";
import { useNameContext } from "./NameContext";

const InputStyled = styled.input`
  width: 100%;
  padding: 9px 14px;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
  margin-bottom: 18px;
  background: #fff;
  color: #222;
  outline: none;
  box-sizing: border-box;
`;

const Input: React.FC = () => {
  const { name, setName } = useNameContext();
  return (
    <InputStyled
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
      placeholder="Entre com o nome"
      autoComplete="off"
      spellCheck={false}
    />
  );
};

export default Input;