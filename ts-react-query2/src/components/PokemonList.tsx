import React from "react";
import usePokemonQuery from "../hooks/usePokemonQuery";
import { ListResponse } from "../types";
import { useNavigate } from "react-router-dom";

const getImageUrl = (index: number): string => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

const PokemonList: React.FC = () => {
  const { isLoading, isError, data } = usePokemonQuery<ListResponse>();
  const navigate = useNavigate();

  const formatNumbering = (index: number): string => {
    return `#${String(index).padStart(3, "0")}`;
  };

  return (
    <div className=" space-y-4">
      {isLoading || isError ? (
        <div className="flex flex-col items-center justify-center w-full">
          <img src="/assets/loading.gif" alt="" />
        </div>
      ) : (
        <>
          {data?.data.results.map((pokemon, idx) => (
            <div
              onClick={() => navigate(`/${idx + 1}`)}
              key={pokemon.name}
              className="border flex items-center rounded-lg shadow-2xl cursor-pointer hover:py-5 transition-all"
            >
              <div>
                <img src={getImageUrl(idx + 1)} alt={pokemon.name} />
              </div>
              <div className="flex w-full justify-between px-5 items-center">
                <div className="font-semibold text-xl">{pokemon.name}</div>
                <div className="font-bold text-gray-300 text-2xl">{formatNumbering(idx + 1)}</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PokemonList;
