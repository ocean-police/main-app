import React from 'react';
import {Chart, Axis, Series, Tooltip, Cursor, Pie} from "react-charts";

export default class Result extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    let dataSet = [
      {
        label: "Fabric Composition",
        data: [
          ["Silk", 0.1],
          ["Cashmere", 0.1],
          ["Polyestere", 0.1],
          ["Nylon", 0.1],
          ["Fox Fur", 0.2],
          ["Mink Fur", 0.1],
          ["Cotton", 0.3],
          ["A", 0.1],
          ["B Fur", 0.2],
        ],
      },
    ];

    let chartColorSequence = [
      "rgb(74, 181, 235)",
      "rgb(252, 104, 104)",
      "rgb(222, 207, 63)",
      "rgb(96, 189, 104)",
      "rgb(250, 164, 58)",
      "rgb(198, 59, 137)",
      "rgb(26, 170, 190)",
      "rgb(115, 79, 233)",
      "rgb(24, 40, 189)",
    ];

    return <div className="resultContainer">
      <h1>this is result page</h1>

      <div className="chart-area-container">
        <div className="chart-area-left">
          <Chart data={dataSet}>
            <Axis type="pie"/>
            <Series type={Pie} showPoints={true}/>
          </Chart>
        </div>
        <div className="chart-area-right">
          Chart Area Right
        </div>
      </div>

    </div>
  }


}

