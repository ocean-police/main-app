import React, { Component } from 'react';
import { connect } from 'react-redux';
import GarmentOption from '../components/GarmentOption';
import { Button, Typography, withStyles, Grid, InputAdornment, Input, MenuItem } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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
  },
  buttonWidth: {
    width: "95%",
    margin: "0 2.5%",
    backgroundColor: "#7A98E7"
  },
  washingPeriodSelect: {
    marginBottom: '20px',
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
        {
          name: 'The only T-shirt 2',
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
  }

  goToResultPage() {
    window.location.href = 'result';
  }

  renderGarmentList() {
    return this.state.updatedAttributes.map((item) => {
       return <div key={item.name}>
        {/*{item.name}*/}
         {item["materials"].map((materialItem) => {
           return <div key={materialItem.material}>
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

          <Grid item xs={12}>
            <Typography variant="display1">
              Material Composition
            </Typography>
            <Typography variant="caption">
              Take a picture of the tag that contains the material composition
            </Typography>
          </Grid>

          <Grid item xs={5} />
          <Grid item xs={7}>
            <GarmentOption/>
          </Grid>

          <Grid item xs={12} className={classes.smallCaption}>
            <Typography variant="caption">Or input your computer</Typography>
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

        <Grid item xs={12}>
          <Typography variant="display1">
            Name Your Garment
          </Typography>
        </Grid>
        <Grid item xs={12} className="direction-type-1 full-width">
          <Typography variant="caption">
            To help you find your favourite garment in your Closet
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.searchSection}>
            <Input
              id="input-with-icon-adornment"
              fullWidth
              placeholder="Short Sleeve 1"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </Grid>
          
          <Grid item xs={1} />
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
          <Grid item xs={3} />
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
