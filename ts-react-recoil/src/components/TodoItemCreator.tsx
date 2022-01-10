import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Todo, todoListState } from "../store/todoListState";

const TodoItemCreator: React.VFC = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" className="border" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}
