import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  margin-bottom: 30px;
  background: #ccc;
  border-radius: 5px;
  padding: 10px 30px;
  cursor: pointer;
  &:hover {
    color: #ccc;
    background-color: gray;
    transition: all 0.2s ease-out;
  }
`;


const ResetButton:React.FC<{
    resetLocal: (e: any) => void;
}> = ({resetLocal}) => {
  return <ButtonContainer onClick={resetLocal}>Reset</ButtonContainer>;
};

export default ResetButton;
