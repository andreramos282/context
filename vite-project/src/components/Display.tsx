import React from "react";
import styled from "styled-components";
import { useNameContext } from "./NameContext";
import Ball from "./Ball";

const DisplayBox = styled.div`
  background: #232323;
  border: 1px solid #8883;
  border-radius: 8px;
  min-height: 60px;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyMsg = styled.div`
  color: #f5f5f5;
  font-weight: bold;
  font-size: 1.1rem;
`;

const BallsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Display: React.FC = () => {
  const { name } = useNameContext();
  if (!name)
    return (
      <DisplayBox>
        <EmptyMsg>Sem entrada</EmptyMsg>
      </DisplayBox>
    );
  return (
    <DisplayBox>
      <BallsRow>
        {name.split("").map((l, i) => (
          <Ball key={i} letter={l} />
        ))}
      </BallsRow>
    </DisplayBox>
  );
};

export default Display;