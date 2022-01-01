import React from "react";

export default function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100);
  }
  console.log("barFillHeigth: ", barFillHeight);

  return (
    <div className=" w-1/12 flex flex-col text-center px-2.5">
      <div className=" relative">
        <div className="  bg-blue-50 border rounded-full" style={{ height: "100px" }}></div>
        <div className=" transition-all  absolute right-0 left-0 bottom-0 bg-blue-500 h-24 rounded-full" style={{ height: barFillHeight }}></div>
      </div>
      <div className="font-semibold">{props.label}</div>
    </div>
  );
}
