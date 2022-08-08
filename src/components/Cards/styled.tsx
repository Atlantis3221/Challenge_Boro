import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 30px;
  column-gap: 30px;
`;
export const CardContainer = styled.article`
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  row-gap: 10px;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const CardImage = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover !important;
  background-position: center !important;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InfoCaption = styled.p`
  text-transform: uppercase;
  opacity: 0.7;
`;
export const InfoText = styled.p``;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 24px;
  width: 24px;
  background: #ccc;
  cursor: pointer;
`
export const ButtonContainer = styled.button`
  margin-bottom: 30px;
  background: #ccc;
  border-radius: 5px;
  padding: 10px 30px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #ccc;
    background-color: gray;
    transition: all 0.5s ease-out;
  }
`;