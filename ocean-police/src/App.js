import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Input from "./components/input";
import Result from "./components/result";

export default class App extends Component {

  constructor(props){
    super(props);

  }
  goToInputPage() {
    return <Input/>
  }

  goToResultPage() {
    return <Result/>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BrowserRouter>
          <div id="application-container">
            <Switch>
              <Route exact path="/" component={this.goToInputPage}/>
              <Route exact path="/result" component={this.goToResultPage}/>
            </Switch>
          </div>
        </BrowserRouter>;
      </div>

    );
  }
}
