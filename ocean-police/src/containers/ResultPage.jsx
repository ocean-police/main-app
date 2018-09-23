import React from 'react';
import {Chart, Axis, Series, Tooltip, Cursor, Pie} from "react-charts";
import badSmileyIcon from "../resources/smileyIcon.JPG"
import plasticBagIcon from "../resources/plasticBag.JPG"
import ocean from "../resources/ocean.JPG"

export default class Result extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chartColorSequence: [
        "rgb(74, 181, 235)",
        "rgb(252, 104, 104)",
        "rgb(222, 207, 63)",
        "rgb(96, 189, 104)",
        "rgb(250, 164, 58)",
        "rgb(198, 59, 137)",
        "rgb(26, 170, 190)",
        "rgb(115, 79, 233)",
        "rgb(24, 40, 189)",
      ],
      dataset: [
        {
          label: "Fabric Composition",
          data: [
            // ["Silk", 0.1],
            // ["Cashmere", 0.1],
            // ["Polyestere", 0.1],
            // ["Nylon", 0.1],
            // ["Fox Fur", 0.2],
            // ["Mink Fur", 0.1],
            // ["Cotton", 0.3],
            // ["A", 0.1],
            // ["B Fur", 0.2],
          ],
        },
        {
          label: "Fabric Composition2",
            data: [
            ["Cashmere", 0.8],
            ["Cotton", 0.1],
            ["Synthetic Fiber", 0.05],
            ["Others", 0.05],
          ],
        },
      ]
    };
  }

  renderColorLegend() {
    return this.state.dataset[1]["data"].map((item, index) => {
      return <div className="legend-bar-section" key={`color-legend-key-${index}`}>
        <div className="legend-bar" style={{backgroundColor: this.state["chartColorSequence"][index]}}></div>
        <div className="legend-bar-percentage">{item[1]*100}%</div>
        <div className="legend-bar-description">{item[0]}</div>
      </div>
    })
  }


  render() {
    //you can declare var here
    return <div className="resultContainer">

      <div className="chart-area-container">
        <div className="legend-heading">
          Material Composition
        </div>
        <div className="legend-subheading">
          Let's see what's in your garment.
        </div>
        <div className="chart-area-left">
          <Chart data={this.state.dataset}>
            <Axis type="pie"/>
            <Series type={Pie} showPoints={true}/>
          </Chart>
          <img className="chart-icon" src={badSmileyIcon} />
        </div>
        <div className="chart-area-right">
          {this.renderColorLegend()}
        </div>
      </div>
      <div className="chart-details-container">
        <div className="legend-heading">
          Microplastics Released
        </div>
        <div className="legend-subheading">
          Each time you wash your garment, plastic particles are shed.
        </div>
        <div className="micro-plastics-cover">
          <div className="legend-description">
            Washed Every 2 Weeks
          </div>
          <div className="micro-plastics-cover-left">
            <div className="legend-description">
              Microplastics/Wash
              <div className="micro-plastics-figure">
                .09
                <span className="micro-plastics-unit">g</span>
              </div>
            </div>
          </div>
          <div className="micro-plastics-cover-right">
            <div className="legend-description">
              Microplastics/Year
              <div className="micro-plastics-figure">
                2.02
                <span className="micro-plastics-unit">g</span>
              </div>
            </div>
          </div>
        </div>
        <div className="plastics-release-container">
          <div className="plastic-release-header">That's...</div>
          <div className="plastic-release-content">
            <div className="plastic-release-left">
              <img className="plastic-release-logo" src={plasticBagIcon}/>
            </div>
            <div className="plastic-release-left">
              <div className="plastic-release-pollution-amount">1/2</div>
              <div>Plastic Bag</div>
            </div>
          </div>
          <div className="plastic-release-subgroup">Straight Into Ocean</div>
        </div>
      </div>
      <img className="ocean-rendering" src={ocean} />
    </div>
  }
}

