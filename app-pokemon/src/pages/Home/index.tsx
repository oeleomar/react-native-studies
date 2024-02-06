import { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../service/api";
import { Text } from "react-native";

export function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("pokemon/");
      const { results } = response.data;

      const payloadPokemon = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);
          return { name: pokemon.name, id, types };
        })
      );
      setPokemon(payloadPokemon);
    };

    fetchData();
  }, []);

  const getMoreInfo = async (url: string) => {
    const response = await api.get(url);
    const { id, types } = response.data;
    return { id, types };
  };

  return (
    <S.Container>
      {pokemon.map((pokemon) => (
        <Text>{pokemon.name}</Text>
      ))}
    </S.Container>
  );
}

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonTypes[];
};

type PokemonTypes = {
  type: string;
};
