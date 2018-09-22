import React from 'react';
import { Chart, Axis, Series, Tooltip, Cursor, Pie } from "react-charts";

export default function Result () {

  var dataSet = [
    {
      label: "Series 1",
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    },
    {
      label: "Series 2",
      data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    }
  ];

  return <div className="resultContainer">
    <h1>this is result page</h1>

    <div className="chartArea">
      <Chart data={dataSet}>
        <Axis type="pie" />
        <Series type={Pie} showPoints={true} />
        <Tooltip />
      </Chart>
    </div>

  </div>
}

