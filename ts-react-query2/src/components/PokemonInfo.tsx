import React from "react";
import { Color, Type } from "../types";

interface Props {
  id: string;
  name?: string;
  types?: Array<Type>;
  color?: Color;
}

const PokemonInfo: React.FC<Props> = ({ id, name, types, color }) => {
  const formatNumbering = (index: number): string => {
    return `#${String(index).padStart(3, "0")}`;
  };

  return <div></div>;
};

export default PokemonInfo;
