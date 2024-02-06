import React from "react";
import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

const Button = ({ title }: ButtonProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Button;
