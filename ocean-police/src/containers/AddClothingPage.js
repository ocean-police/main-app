import React, {Component} from 'react';
import {connect} from 'react-redux';
import GarmentOption from '../components/GarmentOption';
import ActionButton from '../components/ActionButton';
import {AppBar, Toolbar, IconButton, Button, Typography, withStyles, Grid, InputAdornment, Input, MenuItem, CircularProgress} from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ArrowBack from '@material-ui/icons/ArrowBack';

import * as _ from "lodash";
import ListItemText from '@material-ui/core/ListItemText';
import { icons } from '../GarmentIcons';
import ClothingMaterialsRecognizer from '../utils/ClothingMaterialsRecognizer';
// import { diff } from 'deep-object-diff';

import { withRouter } from 'react-router-dom';

const styles = {
  container: {
    margin: "5vw",
    paddingTop: '60px',
  },
  smallCaption: {
    textAlign: "center",
  },
  searchSection: {
    fontSize: "40px",
    margin: "3px 0px",
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
      name: '',
      type: '',
      materials: [
        {
          type: "",
          percentage: 0,
        },
      ],
      washingPeriod: 1,
      isRunningImageRecognition: false,
      imagePreview: null
    };

    this.goToResultPage = this.goToResultPage.bind(this);
  }

  goToResultPage() {
    this.props.history.push('/garments');
  }

  addMaterial() {
    var newMaterials = [...this.state.materials];
    newMaterials.push(
      {
        type: "",
        percentage: 0,
      },
    )
    this.setState({
      materials: newMaterials,
    });
  }

  removeMaterial(materialsIndex) {
    var newMaterials = [...this.state.materials];
    newMaterials.splice(materialsIndex, 1);
    this.setState({
      materials: newMaterials,
    });
  }

  updateClothingMaterialField(materialsIndex, stateValueToUpdate, value) {
    var newMaterials = this.state.materials;
    newMaterials[materialsIndex][stateValueToUpdate] = value;
    this.setState({
      materials: newMaterials,
    });
  }

  renderGarmentList() {
    return (
      <div key={`clothing-index=0`} className={`clothing-index-0`}>
        {this.state.materials.map((materialItem, materialsIndex) => {
          return <div key={`materials-index=${materialsIndex}`} className={`materials-index-${materialsIndex}`}>
            <List component="nav">
              <ListItem>
                <Input
                  id="input-standard"
                  placeholder="Material"
                  className="listitem-input-left"
                  value={materialItem["type"]}
                  onChange={(e) => this.updateClothingMaterialField(materialsIndex, "type", e.target.value)}
                />
                <Input
                  id="adornment-percentage"
                  placeholder="Percentage"
                  className="listitem-input-middle"
                  value={materialItem["percentage"]}
                  endAdornment={<InputAdornment position="end">%</InputAdornment>}
                  onChange={(e) => this.updateClothingMaterialField(materialsIndex, "percentage", e.target.value)}
                >
                </Input>
                <div
                  className="listitem-input-right"
                  onClick={() => this.removeMaterial(materialsIndex)}
                >
                  <i className="fas fa-times"></i>
                </div>
              </ListItem>
            </List>
          </div>
        })}
        <div className="add-material-button-container"
             onClick={() => this.addMaterial()}>
          <div className="add-material-button-left">
            Add a material
          </div>
          <div className="add-material-button-right">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    );
  }

  loadImagePreview(imageFile) {
    var reader  = new FileReader();
    // it's onload event and you forgot (parameters)

    reader.onload = function(e) {
      var image = document.createElement("img");
      // the result image data
      image.src = e.target.result;
      this.setState({ imagePreview: image })
    }.bind(this)

    // you have to declare the file loading
    reader.readAsDataURL(imageFile);
  }

  onImageSelected(e) {
    if (e.target.files.length < 1) {
      console.log("Items not selected")
    } else {
      this.setState({isRunningImageRecognition: true})

      const imageFile = e.target.files[0];
      console.log(imageFile)

      this.loadImagePreview(imageFile)

      const recognizer = new ClothingMaterialsRecognizer();
      recognizer.recognize(imageFile).then(materials => {
        console.log("Materials: ")
        console.log(materials)
  
        this.setState({
          materials: materials,
          isRunningImageRecognition: false
        });
      }).catch(error => {
        console.error("Error: " + error)

        this.setState({
          isRunningImageRecognition: false
        });
      })
    }
  }

  imageRecognitionIndicator() {
    if (this.state.isRunningImageRecognition === true) {
      return <div className="circular-progress-container">
        <CircularProgress  variant="indeterminate" />
      </div>
    } else {
      return <div />
    }
  }

  imagePreview() {
    if (this.state.imagePreview !== null) {
      return <img src={this.state.imagePreview.src} />
    } else {
      return <div />
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <ArrowBack />
            </IconButton>
            <Typography variant="title" color="inherit">
              Add New Garment
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <Grid container className={classes.root} alignItems="center" spacing={24}>
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
                    <Search/>
                  </InputAdornment>
                }
              />
            </Grid>

            <Grid container alignContent="center">
              <Grid item xs={3}>
                <GarmentOption onClick={type => this.setState({type})} type="Short Sleeve" name="Short Sleeve" active={this.state.type === "Short Sleeve"}/>
              </Grid>
              <Grid item xs={3}>
                <GarmentOption onClick={type => this.setState({type})} type="Long Sleeve" name="Long Sleeve" active={this.state.type === "Long Sleeve"}/>
              </Grid>
              <Grid item xs={3}>
                <GarmentOption onClick={type => this.setState({type})} type="Pants" name="Pants" active={this.state.type === "Pants"}/>
              </Grid>
              <Grid item xs={3}>
                <GarmentOption onClick={type => this.setState({type})} type="Skirt" name="Skirt" active={this.state.type === "Skirt"}/>
              </Grid>
              <Grid item xs={3}>
                <GarmentOption onClick={type => this.setState({type})} type="Jacket" name="Jacket" active={this.state.type === "Jacket"}/>
              </Grid>
              <Grid item xs={3}>
                <GarmentOption onClick={type => this.setState({type})} type="Dress" name="Dress" active={this.state.type === "Dress"}/>
              </Grid>
              <Grid item xs={3}>
                <GarmentOption onClick={type => this.setState({type})} type="Underwear" name="Underwear" active={this.state.type === "Underwear"}/>
              </Grid>
              <Grid item xs={3}>
                <GarmentOption onClick={type => this.setState({type})} type="Socks" name="Socks" active={this.state.type === "Socks"}/>
              </Grid>
            </Grid>


            <Grid item xs={4}/>

            <Grid item xs={5}>
              <Button variant="outlined" size="small" color="default" className={classes.button}>
                See More
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="display1">
                Name Your Garment
              </Typography>
              <Typography variant="caption">
                To help you find your favourite garment in your Closet
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.searchSection}>
              <Input
                id="input-without-icon-adornment"
                fullWidth
                onChange={e => {this.setState({name: e.target.value})}}
                value={this.state.name}
                placeholder="Short Sleeve 1"
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

          <Grid item xs={4} />
          <Grid item xs={8}>
            <label htmlFor='myInput'>
              <input id="myInput" style={{visibility: 'hidden'}} type="file" accept="image/*" onChange={e => this.onImageSelected(e) }/>
              <ActionButton type="Camera" />
            </label>
          </Grid>

          <Grid item xs={2} />
          <Grid item xs={10}>
          ` {this.imageRecognitionIndicator()}
            {this.imagePreview()}
          </Grid>

            <Grid item xs={12} className={classes.smallCaption}>
              <Typography variant="caption" align="left">Or input the materials manually</Typography>
            </Grid>
            
            <Grid item xs={12}>
              {this.renderGarmentList()}
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
                value={`${this.state.washingPeriod}`}
                onChange={(e) => this.setState({washingPeriod: parseInt(e.target.value)})}
                fullWidth
                className={classes.washingPeriodSelect}
              >
                <MenuItem value="7">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="7">Every 1 Week</MenuItem>
                <MenuItem value="14">Every 2 Weeks</MenuItem>
                <MenuItem value="21">Every 3 Weeks</MenuItem>
                <MenuItem value="30">A Month</MenuItem>
                <MenuItem value="30">Custom</MenuItem>
              </Select>
            </Grid>
            

            <Grid item xs={5}>
              <Button
                variant="contained"
                className={classes.buttonWidth}
                onClick={() => {
                  this.props.save(this.state);
                  this.goToResultPage();
                }}
                color="primary">
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  save: garment => dispatch({type: 'ADD_GARMENT', garment}),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddClothingPage)));
