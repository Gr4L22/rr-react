import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Boilers from "./components/pages/Boilers";
import Buildinglist from "./components/pages/Building";
import Header from "./components/layout/header";
import BoilersH from "./components/layout/headerBoilerType";
import BuildingH from "./components/layout/headerBuildig";
import BuildingList from "./components/mocks/buildings.json";
import BoilersList from "./components/mocks/boilersType.json";
import AddBuilding from "./components/pages/add/AddBuilding";
import AddBoiler from "./components/pages/add/AddBoiler";
import "./App.css";

class App extends Component {
  state = { BuildingList };
  state2 = { BoilersList };
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
        ...this.state.BuildingList.map((build) => {
          if (build.id === Updated.id) {
            build = Updated;
          }
          return build;
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
  //
  delBoild = (id) => {
    this.setState({
      BoilersList: [
        ...this.state2.BoilersList.filter(
          (BoilersList) => BoilersList.id !== id
        ),
      ],
    });
  };
  updateBuilding = (Updated) => {
    this.setState({
      BuildingList: [
        ...this.state.BuildingList.map((build) => {
          if (build.id === Updated.id) {
            build = Updated;
          }
          return build;
        }),
      ],
    });
  };
  AddBoiler = ({ skillsId, description, stock }) => {
    const newList = {
      id: uuidv4(),
      skillsId,
      description,
      stock,
    };
    this.setState({
      BoilersList: [...this.state2.BoilersList, newList],
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
                <Buildinglist
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
                  BoilersList={this.state2.BoilersList}
                  delBoild={this.delBoild}
                />
                <AddBoiler AddBoiler={this.AddBoiler} />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
