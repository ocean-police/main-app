import React from 'react';
import {Chart, Axis, Series, Tooltip, Cursor, Pie} from "react-charts";
import badSmileyIcon from "../resources/smileyIcon.JPG";
import plasticBagIcon from "../resources/plasticBag.JPG";
import goodIcon from "../resources/good.png";
import badIcon from "../resources/bad.png";
import mehIcon from "../resources/meh.png";
import ocean from "../resources/ocean.JPG";
import pantsIcon from "../resources/pants.JPG";
import { numberOfParticlesPerWashByMaterialType, clothingWeightByType, PolutionInfoProvider } from "../utils/PolutionInfoProvider"

export default class Result extends React.Component {

  constructor(props) {
    super(props);

    const clothing = {
        "type": Object.keys(clothingWeightByType)[0],
        "washingPeriod": 3,
        "name": "test",
        "materials": [
          {
            "type": Object.keys(numberOfParticlesPerWashByMaterialType)[0],
            "percentage": 20
          },
          {
            "type": Object.keys(numberOfParticlesPerWashByMaterialType)[1],
            "percentage": 55
          },
          {
            "type": Object.keys(numberOfParticlesPerWashByMaterialType)[2],
            "percentage": 25
          }
        ]
    }

    const materials = clothing["materials"].map(material => {
      return [material["type"], material["percentage"]]
    })

    const provider = new PolutionInfoProvider()
    const particlesPerWash = provider.calculateTotalNumberOfParticlesPerWash(clothing)
    const gramsPerWash = provider.convertNumberOfParticlesToWeightInGrams(particlesPerWash)

    const particlesPerLifeCircle = provider.calculateTotalNumberOfParticlesPerLifeCircle(clothing)
    const gramsPerLifeCircle = provider.convertNumberOfParticlesToWeightInGrams(particlesPerLifeCircle)

    const numberOfPlasticBags = provider.calculateNumberOfPlasticBags(gramsPerLifeCircle)

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
            data: materials,
        },
        
      ],
      gramsPerWash: gramsPerWash,
      gramsPerLifeCircle: gramsPerLifeCircle,
      numberOfPlasticBags: numberOfPlasticBags
    };
  }

  renderColorLegend() {
    return this.state.dataset[1]["data"].map((item, index) => {
      return <div className="legend-bar-section" key={`color-legend-key-${index}`}>
        <div className="legend-bar" style={{backgroundColor: this.state["chartColorSequence"][index]}}></div>
        <div className="legend-bar-percentage">{Math.trunc(item[1])}%</div>
        <div className="legend-bar-description">{item[0]}</div>
      </div>
    })
  }

  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //January is 0!
    var yyyy = today.getFullYear();
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    today = monthNames[mm].substring(0, 3) + ' ' + dd + ', ' + yyyy;
    return today
  }

  formatWeightInGrams(grams) {
    return Math.trunc(grams*100)/100
  }

  render() {
    //you can declare var here
    return <div className="resultContainer">



      <div className="closet-area-container">
        <div className="date">
          {this.getDate()}
        </div>
        <div className="legend-heading">
          Garment Type
        </div>
        <div className="legend-subheading">
          Let's analyze what's in your cloth.
        </div>
        <img className="closet-item-image" src={pantsIcon}/>
        <div className="garment-type-description">
          Pants
        </div>
      </div>

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
          <img className="chart-icon" src={badIcon} />
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
                {this.formatWeightInGrams(this.state.gramsPerWash)}
                <span className="micro-plastics-unit">g</span>
              </div>
            </div>
          </div>
          <div className="micro-plastics-cover-right">
            <div className="legend-description">
              Microplastics/Year
              <div className="micro-plastics-figure yearly-figure">
                {this.formatWeightInGrams(this.state.gramsPerLifeCircle)}
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
              <div className="plastic-release-pollution-amount">{this.formatWeightInGrams(this.state.numberOfPlasticBags)}</div>
              <div>Plastic Bags</div>
            </div>
          </div>
          <div className="plastic-release-subgroup">Straight Into Ocean</div>
        </div>
      </div>
      <img className="ocean-rendering" src={ocean} />
    </div>
  }
}

