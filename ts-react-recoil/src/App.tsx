import React from "react";
import { atom, selector, useRecoilValue, RecoilRoot } from "recoil";
import axios from "axios";
import CharacterCounter from "./components/CharacterCounter";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import CurrentUserInfo from "./components/CurrentUserInfo";

function App() {
  return (
    <RecoilRoot>
      <TextInput />
      <CharacterCounter />
      <TodoList />
      <CurrentUserInfo />
    </RecoilRoot>
  );
}

export default App;
