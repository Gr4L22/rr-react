import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Boilers from "./components/pages/Boilers";
import Building from "./components/pages/Building";
import Header from "./components/layout/header";
import BoilersH from "./components/layout/headerBoilerType";
import BuildingH from "./components/layout/headerBuildig";
import BuildingList from "./components/mocks/buildings.json";
import BoilersList from "./components/mocks/boilersType.json";
import AddBuilding from "./components/pages/add/AddBuilding";
import AddBoiler from "./components/pages/add/AddBoiler";
import "./App.css";

class App extends Component {
  state = { BuildingList, BoilersList };

  delBuild = (id) => {
    this.setState({
      BuildingList: [
        ...this.state.BuildingList.filter(
          (BuildingList) => BuildingList.id !== id
        ),
      ],
    });
  };
  updateBuilding = (Updated) => {
    this.setState({
      BuildingList: [
        ...this.state.BuildingList.map((list) => {
          if (list.id === Updated.id) {
            list = Updated;
          }
          return list;
        }),
      ],
    });
  };
  addBuilding = ({ address, boilersId, fullName, phone }) => {
    const newList = {
      id: uuidv4(),
      address,
      boilersId,
      fullName,
      phone,
    };
    this.setState({
      BuildingList: [...this.state.BuildingList, newList],
    });
  };
  delBoild = (id) => {
    this.setState({
      BoilersList: [
        ...this.state.BoilersList.filter(
          (BoilersList) => BoilersList.id !== id
        ),
      ],
    });
  };
  updateBoiler = (Updated) => {
    this.setState({
      BoilersList: [
        ...this.state.BoilersList.map((build) => {
          if (build.id === Updated.id) {
            build = Updated;
          }
          return build;
        }),
      ],
    });
  };
  addBoiler = ({ skillsId, description, stock }) => {
    const newList = {
      id: uuidv4(),
      skillsId,
      description,
      stock,
    };
    this.setState({
      BoilersList: [...this.state.BoilersList, newList],
    });
  };
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            path="/buildings"
            render={(props) => (
              <React.Fragment>
                <BuildingH />
                <Building
                  BuildingList={this.state.BuildingList}
                  delBuild={this.delBuild}
                  updateBuilding={this.updateBuilding}
                />
                <AddBuilding addBuilding={this.addBuilding} />
              </React.Fragment>
            )}
          />
          <Route
            path="/boilers"
            render={(props) => (
              <React.Fragment>
                <BoilersH />
                <Boilers
                  BoilersList={this.state.BoilersList}
                  delBoild={this.delBoild}
                  updateBoiler={this.updateBoiler}
                />
                <AddBoiler addBoiler={this.addBoiler} />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
