import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/App.css';
import './styles/AddClothingPage.css';
import './styles/result.css';
import WelcomePage from './containers/WelcomePage';
import AddClothingPage from './containers/AddClothingPage';
import configureStore from './store/index';
import ResultPage from './containers/ResultPage.jsx';

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
                <Route exact path="/" component={WelcomePage} />
                <Route exact path="/add" component={AddClothingPage} />
                <Route exact path="/result" component={ResultPage}/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}
