import styled, { css } from "styled-components/native";

type PokemonType = {
  type: string;
};

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
  ${({ theme, type }) => css`
    border-radius: 10px;
    margin-top: 30px;
    flex-direction: row;
    padding: 20px;
    background-color: ${theme.colors.backgroundCard[type]};
  `}
`;

export const LeftSide = styled.View`
  width: 50%;
  position: relative;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    margin-top: 5px;
    text-transform: capitalize;
    color: ${theme.colors.background};
  `}
`;

export const ImageCardDetailLeftSide = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90;
  top: -10px;
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const PokemonType = styled.View<PokemonType>`
  ${({ theme, type }) => css`
    border-radius: 3px;
    padding: 5px;
    width: 65px;
    height: 25px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.boxType[type]};
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    color: ${theme.colors.background};
    text-transform: capitalize;
  `}
`;

export const RightSide = styled.View``;
