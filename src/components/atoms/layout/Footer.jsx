import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 Remi Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #588b8b;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
