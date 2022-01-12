import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Tabs from "../components/Tabs";
import usePokemonQuery from "../hooks/usePokemonQuery";
import useSpeciesQuery from "../hooks/useSpecies";
import { PokemonResponse } from "../types";

type Params = {
  id: string;
};

type Tab = "about" | "stats" | "evolution";

const DetailPage: React.FC = () => {
  const { id } = useParams<Params>();
  const [selectedTab, setSelectedTab] = useState<Tab>("about");
  const pokemonQueryResult = usePokemonQuery<PokemonResponse>(id);
  const speciesQueryResult = useSpeciesQuery(id);

  const { name, types, height, weight, abilities, baseExp, stats } = useMemo(
    () => ({
      name: pokemonQueryResult.data?.data.name,
      types: pokemonQueryResult.data?.data.types,
      height: pokemonQueryResult.data?.data.height,
      weight: pokemonQueryResult.data?.data.weight,
      abilities: pokemonQueryResult.data?.data.abilities,
      baseExp: pokemonQueryResult.data?.data.base_experience,
      stats: pokemonQueryResult.data?.data.stats,
    }),
    [pokemonQueryResult]
  );

  const { color, growthRate, flavorText, genderRate, isLegendary, isMythical, evolutionChainUrl } = useMemo(
    () => ({
      color: speciesQueryResult.data?.data.color,
      growthRate: speciesQueryResult.data?.data.growth_rate.name,
      flavorText: speciesQueryResult.data?.data.flavor_text_entries[0].flavor_text,
      genderRate: speciesQueryResult.data?.data.gender_rate,
      isLegendary: speciesQueryResult.data?.data.is_legendary,
      isMythical: speciesQueryResult.data?.data.is_mythical,
      evolutionChainUrl: speciesQueryResult.data?.data.evolution_chain.url,
    }),
    [speciesQueryResult]
  );

  const clickHandler = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Tabs tab={selectedTab} onClick={clickHandler} color={{ name: "red", url: "" }}></Tabs>
    </div>
  );
};

export default DetailPage;
