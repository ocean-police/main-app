import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import AddClothingPage from './containers/AddClothingPage';
import configureStore from './store/index';

const store = configureStore();

export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <div id="application-container">
              <Switch>
                <Route exact path="/" component={AddClothingPage} />
                <Route exact path="/add" component={AddClothingPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}
