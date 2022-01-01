import React from "react";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="flex items-center justify-center border py-5 bg-purple-200">
      {props?.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}></ChartBar>
      ))}
    </div>
  );
}
