import styled from "styled-components";

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  width: 100%;
`;

const Header = () => {
    return(
        <HeaderContainer>
            хедер
        </HeaderContainer>
    );
}

export default Header