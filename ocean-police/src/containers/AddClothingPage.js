import React, { Component } from 'react';
// import { } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
// import { diff } from 'deep-object-diff';

const styles = {

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

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        Hello
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddClothingPage));
