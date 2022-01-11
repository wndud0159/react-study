import React from "react";
import PokemonList from "../components/PokemonList";

const IndexPage: React.FC = () => {
  return (
    <div className="px-5 mt-5">
      <div className=" text-3xl text-red-400 font-bold">Pokédex</div>
      <div className="text-gray-400 py-6">The Pokédex conteains detailed stats for every form Pokémon games</div>
      <PokemonList />
    </div>
  );
};

export default IndexPage;
