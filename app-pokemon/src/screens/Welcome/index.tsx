import React from "react";
import * as S from "./styles";

import AnimatedLottieView from "lottie-react-native";
import Button from "../../components/Button";

export function Welcome() {
  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimation>
          <S.WrapperImage>
            <AnimatedLottieView
              autoPlay
              source={require("./pokemon.json")}
              loop
              style={{ width: 200 }}
            />
          </S.WrapperImage>
        </S.WrapperAnimation>

        <S.Title>Bem Vindo</S.Title>
        <S.Subtitle>Encontre todos os Pokemon em um só lugar</S.Subtitle>
      </S.Content>
      <S.Footer>
        <Button title="Entrar" />
      </S.Footer>
    </S.Container>
  );
}
