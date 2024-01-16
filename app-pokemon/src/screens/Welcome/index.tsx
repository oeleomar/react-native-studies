import React from "react";
import * as S from "./styles";

import AnimatedLottieView from "lottie-react-native";

export function Welcome() {
  return (
    <S.Container>
      <S.Content>
        <AnimatedLottieView autoPlay source={require("./pokemon.json")} loop />
      </S.Content>
      <S.Footer></S.Footer>
    </S.Container>
  );
}
