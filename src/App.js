import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Boilers from './components/pages/Boilers';
import Buildinglist from './components/pages/Buildinglist';
import Header from './components/layout/header';
import BoilersH from './components/layout/headerBoilerType';
import BuildingH from './components/layout/headerBuildig';

import './App.css';

function App() {
  return (
     <Router>
      <div className="App">
        <Header />
        <Route path='/buildings' render={props => (
          <React.Fragment>
            <BuildingH />
            <Buildinglist />
          </React.Fragment>
        )}/>
        <Route path='/boilers' render={props => (
          <React.Fragment>
            <BoilersH />
            <Boilers />
          </React.Fragment>
        )}/>
      </div>
    </Router>
  );
}

export default App;
