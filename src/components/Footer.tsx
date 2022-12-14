import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px 30px;
  background: lightgray;
  z-index: 99;
`;

const FooterText = styled.span`
  font-size: 16px;
`;

const FooterLink = styled.a`
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Tugarev Stepan{" "}
        <FooterLink href="https://t.me/Stepa2garev">Telegram</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
