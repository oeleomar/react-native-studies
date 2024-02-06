import { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../service/api";
import Card from "../../components/Card";
import { FlatList } from "react-native";

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
      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card data={item} />}
      />
    </S.Container>
  );
}

export type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonTypes[];
};

type PokemonTypes = {
  type: {
    name: string;
  };
};
