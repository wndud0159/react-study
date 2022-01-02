import React, { VFC } from "react";

interface Props {
  title: string;
  onOpenModal: () => void;
}

const TodoList: VFC<Props> = ({ title, onOpenModal }) => {
  return (
    <div className="border py-3 px-5 rounded-md bg-white">
      <div className="py-3 text-2xl font-bold">{title}</div>
      <div className="text-right">
        <button onClick={onOpenModal} className="bg-red-900 text-white font-semibold px-3 py-2 rounded-md">
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TodoList;
