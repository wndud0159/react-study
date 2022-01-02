import { FC, useState } from "react";
import Modal from "../components/Modal/Modal";
import TodoList from "../components/Todo/TodoList";

const Todo: FC = () => {
  const [isModal, setIsModal] = useState(false);

  const openModalHandler = () => {
    setIsModal(true);
  };

  const closeModalHandler = () => {
    setIsModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" py-10 text-4xl font-bold">My Todos</div>
      <div className="px-10 space-y-3">
        <TodoList onOpenModal={openModalHandler} title="Master React" />
        <TodoList onOpenModal={openModalHandler} title="Learn React" />
        <TodoList onOpenModal={openModalHandler} title="Explore the full React course" />
      </div>
      {isModal && <Modal onCloseModal={closeModalHandler} />}
    </div>
  );
};

export default Todo;
