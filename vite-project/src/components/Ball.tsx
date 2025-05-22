import React from "react";
import styled from "styled-components";

const BallStyled = styled.div`
  width: 40px;
  height: 40px;
  background: #6366f1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 6px;
  user-select: none;
`;

interface BallProps {
  letter: string;
}

const Ball: React.FC<BallProps> = ({ letter }) => <BallStyled>{letter}</BallStyled>;

export default Ball;