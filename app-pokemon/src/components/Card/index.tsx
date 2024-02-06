import React from "react";
import dotsImage from "../../../assets/img/dots.png";
import pokebollDetail from "../../../assets/img/pokeballCard.png";
import * as S from "./styles";
import { Pokemon } from "../../pages/Home";
import { TouchableOpacityProps } from "react-native";

type DataProps = { data: Pokemon } & TouchableOpacityProps;

const Card = ({ data, ...rest }: DataProps) => {
  return (
    <S.PokemonCard type={data.types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageCardDetailLeftSide source={dotsImage} />

        <S.PokemonContentType>
          {data.types.map((type, index) => (
            <S.PokemonType key={index} type={type.type.name}>
              <S.PokemonTypeText>{type.type.name}</S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>
      <S.RightSide>
        <S.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          }}
        />
        <S.PokeballDetail source={pokebollDetail} />
      </S.RightSide>
    </S.PokemonCard>
  );
};

export default Card;
