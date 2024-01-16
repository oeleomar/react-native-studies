import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.background};
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    height: 70%;
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    height: 30%;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    background-color: ${theme.colors.backgroundCard.water};
  `}
`;
