import React, { Component } from "react";
import List from "./list/Buildlist";

class Building extends Component {
  render() {
    return this.props.BuildingList.map((list) => (
      <List
        key={list.id}
        list={list}
        delBuild={this.props.delBuild}
        updateBuilding={this.props.updateBuilding}
      />
    ));
  }
}

export default Building;
