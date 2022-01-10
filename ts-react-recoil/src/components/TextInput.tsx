import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../store/textState";

const TextInput: React.VFC = () => {
  const [text, setText] = useRecoilState<string>(textState);

  const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input onChange={changeTextHandler} value={text} className="border-2" type="text" />
      <br />
      acho: {text}
    </div>
  );
};

export default TextInput;
