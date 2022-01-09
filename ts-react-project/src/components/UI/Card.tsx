import React, { VFC } from "react";

interface Props {
  children: React.ReactNode;
}

const Card: VFC<Props> = (props) => {
  return <div className="flex flex-col justify-center items-center text-center w-8/12 border rounded-lg mb-3"> {props.children}</div>;
};

export default Card;
