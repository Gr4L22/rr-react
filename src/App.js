import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Boilers from './components/pages/Boilers';
import Buildinglist from './components/pages/Building';
import Header from './components/layout/header';
import BoilersH from './components/layout/headerBoilerType';
import BuildingH from './components/layout/headerBuildig';
import BuildingList from './components/mocks/buildings.json';
import BoilersList from './components/mocks/boilersType.json';

import './App.css';

class App extends Component  {
  state = {BuildingList}
  state2 = {BoilersList}
  render () {
    return (
        <Router>
        <div>
          <Header />
          <Route path='/buildings' render={props => (
            <React.Fragment>
              <BuildingH />
              <Buildinglist BuildingList = {this.state.BuildingList}/>
            </React.Fragment>
          )}/>
          <Route path='/boilers' render={props => (
            <React.Fragment>
              <BoilersH />
              <Boilers BoilersList = {this.state2.BoilersList}/>
            </React.Fragment>
          )}/>
        </div>
      </Router>
    )
  }
}

export default App;
