import { useEffect, useState, VFC } from "react";
import BackDrop from "./BackDrop";

interface Props {
  onCloseModal: () => void;
}

const Modal: VFC<Props> = ({ onCloseModal }) => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    console.log("Click modal");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("show");
      setShow(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed w-full inset-0 h-screen flex items-center justify-center">
      <BackDrop onCloseModal={onCloseModal} />
      <div onClick={clickHandler} className={`${show ? "top-40" : "-top-40"} fixed  transition-all z-20  bg-white w-96 mx-10 py-5 px-5 text-center rounded-md`}>
        <div className="text-2xl font-bold py-5">Are you sure?</div>
        <div className=" space-x-10">
          <button onClick={onCloseModal} className="border border-red-900 px-5 py-2 text-red-900 rounded-md ">
            Cancel
          </button>
          <button className="bg-red-900 px-5 py-2 rounded-md text-white">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
