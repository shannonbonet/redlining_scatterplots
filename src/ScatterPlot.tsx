import React from "react";
import {
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
  Scatter,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const ScatterPlot = (props: any) => {
  return (
    <ScatterChart
      width={700}
      height={400}
      margin={{ top: 20, right: 20, bottom: 30, left: 10 }}
    >
      <CartesianGrid strokeDasharray="3" horizontal={false} />
      <XAxis
        dataKey={props.xDataKey}
        type="category"
        label={{ value: "Zip Code Area", position: "bottom" }}
        padding={{ left: 20, right: 20 }}
        allowDuplicatedCategory={false}
      />
      <YAxis dataKey={props.yDataKey} name={props.yDataKey} unit=" pctl" />
      <ZAxis
        type="number"
        dataKey="housing_burden"
        range={[20, 200]}
        name="housing_burden"
        unit="pctl"
      />
      <Tooltip />
      <Legend align="right" verticalAlign="top" />
      <Scatter name={props.yDataKey} data={props.data} fill="#29339B" />
    </ScatterChart>
  );
};

export default ScatterPlot;
