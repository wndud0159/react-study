import React from "react";

export default function Card(props) {
  return <div className=" bg-gray-900 rounded-xl my-5 pb-5 px-2">{props.children}</div>;
}
