import React, { Component } from 'react';
import { Button, TextField, withStyles, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import GarmentOption from '../components/GarmentOption';
// import { diff } from 'deep-object-diff';

const styles = {
  container: {
    margin: "5vw"
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
            <TextField item xs={10}
              fullWidth
              id="standard"
              label="Search garment"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
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
        <div>
          <Button variant="contained" color="primary" onClick={this.goToResultPage}>See Result</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddClothingPage));
