import React from "react";
import { Ability, Color, Type } from "../types";

interface Props {
  isLoading: boolean;
  color?: Color;
  growthRate?: string;
  flavorText?: string;
  genderRate?: number;
  isLegendary?: boolean;
  isMythical?: boolean;
  types?: Array<Type>;
  baseExp?: number;
  abilities?: Array<Ability>;
}

const About: React.FC<Props> = ({ isLoading, color, growthRate, flavorText, genderRate, isLegendary, isMythical, types, baseExp, abilities }) => {
  const rarity = isLegendary ? "Legendary" : isMythical ? "Mythical" : "Normal";

  return <div></div>;
};

export default About;
