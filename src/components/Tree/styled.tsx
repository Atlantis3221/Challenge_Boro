import styled from "styled-components";

export const TreeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const ImageWrapper = styled.li<{ background: string }>`
  height: 64px;
  width: 64px;
  background-size: cover !important;
  background-position: center !important;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) =>
    `url(http://contest.elecard.ru/frontend_data/${props.background})`};
`;

export const TreeNames = styled.ul<{isVisible:any,i:any}>`
  padding-left: 15px;
  display: ${(props)=>props.isVisible===props.i ? "block": "none"};
`
export const TreeItem = styled.p`
  cursor: pointer;
`;
export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalContentWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  z-index: 999;
`;
export const ModalContent = styled.img`
  width: 100%;
  z-index: 999;
`;
