import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const styles = {
    
};

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
         <Button onClick={() => {this.props.history.push('/add')}}>
            Get Started
        </Button>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(WelcomePage));
