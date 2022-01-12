import React from "react";
import { Color } from "../types";

interface Props {
  tab: "about" | "stats" | "evolution";
  onClick: (tab: "about" | "stats" | "evolution") => void;
  color?: Color;
}

const Tabs: React.FC<Props> = ({ tab, onClick, color }) => {
  return (
    <div>
      <div onClick={() => onClick("about")} className={`${tab === "about" ? `text-${color?.name}-400` : ""}`}>
        About
      </div>
      <div onClick={() => onClick("stats")} className={`${tab === "stats" ? `text-${color?.name}-400` : ""}`}>
        Stats
      </div>
      <div onClick={() => onClick("evolution")} className={`${tab === "evolution" ? `text-${color?.name}-400` : ""}`}>
        Evolution
      </div>
    </div>
  );
};

export default Tabs;
