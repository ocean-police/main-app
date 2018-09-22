import React from 'react';
import { Chart, Axis, Series, Tooltip, Cursor, Line, Doughnut, Pie } from "react-charts";

export default function Result () {

  var data = [
    {
      label: "Series 1",
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    }
  ]


  return <div className="">
    <h1>this is result page</h1>

    <div className="chartArea">
      <Chart data={data}>
        <Axis type="pie" />
        <Series type={Pie} showPoints={false} />
        <Tooltip />
      </Chart>
    </div>

  </div>
}

