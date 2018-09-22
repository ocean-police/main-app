import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

export default class Input extends Component{

  goToResultPage() {
    window.location.href = 'result';
  }

  render() {
    return <div>

      Welcome to Ocean Police

      Please select the clothing type.
      <li>Jeans</li>
      <li>Shirts</li>
      <li>Blouse</li>

      <Button variant="contained" color="primary" onClick={this.goToResultPage}>See Result</Button>

    </div>
  }
}

