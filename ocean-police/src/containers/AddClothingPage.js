import React, { Component } from 'react';
import { connect } from 'react-redux';
import GarmentOption from '../components/GarmentOption';
import { Button, Typography, TextField, withStyles, Grid, InputAdornment, FormControl, InputLabel, Input } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

// import { diff } from 'deep-object-diff';

const styles = {
  container: {
    margin: "5vw"
  },
  garmentType: {
    color: "#435761",
    textAlign: "left",
    fontSize: "26px",
    marginBottom: "4px",
  },
  direction: {
    color: "#435761",
    textAlign: "left",
    fontSize: "14px",
    marginBottom: "2px",
  },
  searchSection: {
    fontSize: "40px",
    margin: "3px 0px",
  },
  buttonWidth: {
    width: "95%",
    margin: "0 2.5%",
    backgroundColor: "#7A98E7"
  }
};

class AddClothingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedAttributes: {
        name: '',
        type: 'T_SHIRT',
        materials: [],
        washingPeriod: 1,
      },
    };
  }

  goToResultPage() {
    window.location.href = 'result';
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Typography className={classes.garmentType}>
              Garment Type
            </Typography>
          </Grid>
          <Grid item xs={12} className="direction-type-1 full-width">
            <Typography className={classes.direction}>
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
