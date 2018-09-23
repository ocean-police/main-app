import React, { Component } from 'react';
import { connect } from 'react-redux';
import GarmentOption from '../components/GarmentOption';
import { Button, Typography, withStyles, Grid, InputAdornment, Input, MenuItem } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import * as _ from "lodash";
import ListItemText from '@material-ui/core/ListItemText';

// import { diff } from 'deep-object-diff';

const styles = {
  container: {
    margin: "5vw"
  },
  smallCaption: {
    textAlign: "center",
  },
  searchSection: {
    fontSize: "40px",
    margin: "3px 0px",
    border: "1px solid rgba(0,0,0,0.12)",
  },
  buttonWidth: {
    width: "95%",
    margin: "0 20%",
    backgroundColor: "#7A98E7",
  },
  washingPeriodSelect: {
    marginBottom: '20px',
  },
  listItemInputWidth: {
    marginRight: "10px"
  },
  button: {
    color: "grey",
    border: "1px solid grey",
    ":hover": {
      border: "1px solid grey"
    } 
  }
};

class AddClothingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedAttributes: [
        {
          name: 'The only T-shirt',
          type: 'T_SHIRT',
          materials: [
            {
              material: "Plastic Cloth",
              percentage: 20,
            },
            {
              material: "Synthetic Polyester",
              percentage: 80,
            },
          ],
          washingPeriod: 1,
        },
      ]
    };
  }

  goToResultPage() {
    window.location.href = 'result';
  }

  addMaterial(clothingIndex) {
    var newState = this.state.updatedAttributes;
    newState[clothingIndex]["materials"].push(
      {
        material: "",
        percentage: 0,
      },
    )
    this.setState({
      updatedAttributes: newState
    });
  }

  removeMaterial(clothingIndex, materialsIndex) {
    var newState = this.state.updatedAttributes
    _(newState[clothingIndex]["materials"])
      .splice(materialsIndex, 1)
      .value();
    this.setState({
      updatedAttributes: newState
    });
  }

  renderGarmentList() {
    return this.state.updatedAttributes.map((item, clothingIndex) => {
       return <div key={`clothing-index=${clothingIndex}`} className={`clothing-index-${clothingIndex}`}>
        {/*{item.name}*/}
         {item["materials"].map((materialItem, materialsIndex) => {
           return <div key={`materials-index=${materialsIndex}`}
             className={`materials-index-${materialsIndex}`}>
             <List component="nav">
               <ListItem>
                 <Input
                   id="input-standard"
                   placeholder="Material"
                   className="listitem-input-left"
                   defaultValue={materialItem["material"]}
                 />
                 <Input
                   id="adornment-percentage"
                   placeholder="Percentage"
                   className="listitem-input-middle"
                   defaultValue={materialItem["percentage"]}
                   endAdornment={<InputAdornment position="end">%</InputAdornment>}
                 >
                 </Input>
                 <div
                   className="listitem-input-right"
                   onClick={() => this.removeMaterial(clothingIndex, materialsIndex)}
                 >
                   <i className="fas fa-times"></i>
                 </div>
               </ListItem>
             </List>
           </div>
         })}
         <div className="add-material-button-container"
           onClick={() => this.addMaterial(clothingIndex)}>
           <div item xs={5} className="add-material-button-left">
             Add a material
           </div>
           <div item xs={3} className="add-material-button-right">
             <i className="fas fa-plus"></i>
           </div>
         </div>
      </div>
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid container className={classes.root} alignItems="center" spacing={16}>
          <Grid item xs={12} className="direction-type-1 full-width">
            <Typography variant="display1">
              Garment Type
            </Typography>
            <Typography variant="caption">
              Start your entry with garment type
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.searchSection}>
            <Input
              id="input-with-icon-adornment"
              fullWidth
              placeholder="Search garment"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </Grid>

          <Grid container alignContent="center">
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
          </Grid>


        <Grid item xs={4} />

        <Grid item xs={5}>
          <Button variant="outlined" size="small" color="default" className={classes.button}>
          See More
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="display1">
            Name Your Garment
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.searchSection} >
          <Input
            id="input-without-icon-adornment"
            fullWidth
            placeholder="Short Sleeve 1"
            startAdornment={
              <InputAdornment position="start">   
                </InputAdornment>
            }
          />
        </Grid>

          <Grid item xs={12}>
            <Typography variant="display1">
              Material Composition
            </Typography>
            <Typography variant="caption">
              Take a picture of the tag that contains the material composition
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.smallCaption}>
            <Typography variant="caption">Or input the materials manually</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="display1">
              Washing Habits
            </Typography>
            <Typography variant="caption">
              Let's see how often will you be washing this garment.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Select
                value="every 1 week"
                onChange={() => {}}
                fullWidth
                className={classes.washingPeriodSelect}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="every 1 week">Every 1 Week</MenuItem>
              <MenuItem value="every 2 weeks">Every 2 Weeks</MenuItem>
              <MenuItem value="every 3 weeks">Every 3 Weeks</MenuItem>
              <MenuItem value="a month">A Month</MenuItem>
              <MenuItem value="customs">Custom</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={1} />
        <Grid item xs={1} />


        <Grid item xs={12} className="direction-type-1 full-width">
          <Typography variant="caption">
            To help you find your favourite garment in your Closet
          </Typography>
        </Grid>
          <div>
            {this.renderGarmentList()}
          </div>

          <Grid item xs={5}>
            <Button
              variant="contained"
              className={classes.buttonWidth}
              color="primary" onClick={this.goToResultPage}>
              Save
            </Button>
          </Grid>

          <Grid item xs={5}>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonWidth}>
              Add Another
            </Button>
          </Grid>
          <Grid item xs={3}/>

        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddClothingPage));
