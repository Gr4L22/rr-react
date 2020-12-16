import React, { Component } from "react";
import List from "./list/Boilerlist";

class Boilers extends Component {
  render() {
    return this.props.BoilersList.map((list) => (
      <List
        key={list.id}
        list={list}
        delBoild={this.props.delBoild}
        updateBoiler={this.props.updateBoiler}
      />
    ));
  }
}

export default Boilers;
