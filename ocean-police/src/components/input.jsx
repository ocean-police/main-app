import React, {Component} from 'react';
// import Input from "./components/input";
import Result from "./result";

// export default function Input () {
//   return <div>
//
//     Welcome to Ocean Police
//
//     Please select the clothing type.
//     <li>Jeans</li>
//     <li>Shirts</li>
//     <li>Blouse</li>
//
//     <button>See Result</button>
//
//   </div>
// }

export default class Input extends Component{

  // goToInputPage() {
  //   return <Input/>
  // }
  //

  goToResultPage() {
    window.location.href = 'result';
    console.log("hit");
  }

  render() {
    return <div>

      Welcome to Ocean Police

      Please select the clothing type.
      <li>Jeans</li>
      <li>Shirts</li>
      <li>Blouse</li>

      <button onClick={this.goToResultPage}>See Result</button>

    </div>
  }
}

