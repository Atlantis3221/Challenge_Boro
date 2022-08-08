import styled from "styled-components";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 30px;
  background: lightgray;
  z-index: 100;
`;

const HeaderText = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Элекард</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
