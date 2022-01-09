import React from "react";
import { useRecoilValue } from "recoil";
import { charCounterState } from "../store/textState";

const CharacterCounter: React.VFC = () => {
  const count = useRecoilValue(charCounterState);

  return <div>Character Count : {count}</div>;
};

export default CharacterCounter;
