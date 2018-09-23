import React, { Component } from 'react';
import { connect } from 'react-redux';
import GarmentOption from '../components/GarmentOption';
import { Button, Typography, TextField, withStyles, Grid, InputAdornment, FormControl, InputLabel, Input } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// import { diff } from 'deep-object-diff';

const styles = {
  container: {
    margin: "5vw"
  },
  searchSection: {
    fontSize: "40px",
    margin: "3px 0px",
  },
  buttonWidth: {
    width: "95%",
    margin: "0 2.5%",
    backgroundColor: "#7A98E7"
  },
  listItemInputWidth: {
    marginRight: "10px"
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
            }
          ],
          washingPeriod: 1,
        },
      ]
    };
    this.renderGarmentList = this.renderGarmentList.bind(this);
  }

  goToResultPage() {
    window.location.href = 'result';
  }

  renderGarmentList() {
    return this.state.updatedAttributes.map((item) => {
       return <div>
        {/*{item.name}*/}
         {item["materials"].map((materialItem) => {
           return <div>
             <List component="nav" >
               <ListItem>
                     <Input
                       id="input-standard"
                       placeholder="Material"
                       className="listitem-input-left"
                       defaultValue={materialItem["material"]}
                     />
                     <Input
                       id="input-standard"
                       placeholder="Percentage"
                       className="listitem-input-middle"
                       defaultValue={materialItem["percentage"]}
                     >
                     </Input>
                      <div className="listitem-input-right">
                        <i className="fas fa-times"></i>
                      </div>

               </ListItem>
             </List>
           </div>
         })}
      </div>
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Typography variant="display1">
              Garment Type
            </Typography>
          </Grid>
          <Grid item xs={12} className="direction-type-1 full-width">
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
          <Grid container>
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
          <Grid item xs={1} />

          {this.renderGarmentList()}

          <Grid item xs={12}>
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
          </Grid>
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
