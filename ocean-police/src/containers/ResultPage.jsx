import React from 'react';
import { Chart, Axis, Series, Tooltip, Cursor, Pie } from "react-charts";

export default function Result () {

  var dataSet = [
    {
      label: "Fabric Composition",
      data: [["Silk", 0.1], ["Cashmere", 0.1], ["Polyestere", 0.1], ["Nylon", 0.1], ["Cotton", 0.6]]
    },
  ];

  return <div className="resultContainer">
    <h1>this is result page</h1>

    <div className="chartArea">
      <Chart data={dataSet}>
        <Axis type="pie" />
        <Series type={Pie} showPoints={true} />
        {/*<Tooltip />*/}
      </Chart>
    </div>

  </div>
}

