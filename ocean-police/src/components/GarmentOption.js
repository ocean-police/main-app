import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { icons } from '../GarmentIcons.js';

const styles = {
  garmentCircle: {
    marginTop: '20px',
    height: '80px',
    width: '80px',
    backgroundColor: 'white',
    border: "1px solid #E2E2E2",
    cursor:  'pointer',
    borderRadius: '100px',
  },
  iconActiveColor: {
    backgroundColor: '#7A98E7',
    boxShadow: "0 1px 7px 0 rgba(0,0,0,0.12)",
  },
  icon: {
    transform: 'translate(162%,-50%)',
    top: '50%',
    left: '-277%',
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
        <div onClick={() => {this.props.onClick(this.props.type)}} className={[classes.garmentCircle, (this.props.active ? classes.iconActiveColor : null)].join(' ')}>
          <img className={classes.icon} src={ icons[this.props.type.replace(/\s/g, "") + (this.props.active ? 'White' : '')]}  />
        </div>
        <Typography variant="caption" align="center" className={classes.caption}> {this.props.name} </Typography>
      </React.Fragment>
    );
  }
}

AddClothingPage.proptypes = {

}

export default withStyles(styles)(AddClothingPage);
