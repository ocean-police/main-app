import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { Jacket } from '../GarmentIcons.js';

const styles = {
  garmentCircle: {
    marginTop: '20px',
    height: '80px',
    width: '80px',
    backgroundColor: 'white',
    boxShadow: '0 1px 7px 0 rgba(0,0,0,0.12)',
    borderRadius: '100px',
  },
  iconActiveColor: {
    backgroundColor: '#7A98E7',
  },
  icon: {
    transform: 'translateY(-50%)',
    top: '50%',
    position: 'relative',
    fill: 'white',
  },
  caption: {
    marginTop: '10px',
    width: '80px',
    marginBottom: '20px',
  },
};

class AddClothingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={[classes.garmentCircle, (this.props.active ? classes.iconActiveColor : null)].join(' ')}>
          <img className={classes.icon} src={Jacket} alt="logo" />
        </div>
        <Typography variant="caption" className={classes.caption}>Short Sleeves</Typography>
      </React.Fragment>
    );
  }
}

AddClothingPage.proptypes = {

}

export default withStyles(styles)(AddClothingPage);
