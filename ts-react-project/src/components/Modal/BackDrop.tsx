import { VFC } from "react";

interface Props {
  onCloseModal: () => void;
}

const BackDrop: VFC<Props> = ({ onCloseModal }) => {
  // const clickHandler = () => {
  //   console.log("click BackDrop");
  // };

  return <div onClick={onCloseModal} className=" z-10 fixed bg-black inset-0 h-screen w-full opacity-50"></div>;
};

export default BackDrop;
