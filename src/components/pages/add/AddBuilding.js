import React, { Component } from "react";

export class AddBuilding extends Component {
  state = {
    address: "",
    boilersId: "",
    fullName: "",
    phone: "",
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBuilding(this.state);
    this.setState({
      address: "",
      boilersId: "",
      fullName: "",
      phone: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          style={{ flex: "3" }}
          type="text"
          name="address"
          placeholder="Address"
          value={this.state.address}
          onChange={this.onChange}
        ></input>
        <input
          style={{ flex: "2" }}
          type="number"
          name="boilersId"
          placeholder="Boiler Type"
          value={this.state.boilersId}
          onChange={this.onChange}
        ></input>
        <input
          style={{ flex: "3" }}
          type="text"
          name="fullName"
          placeholder="Name"
          value={this.state.fullName}
          onChange={this.onChange}
        ></input>
        <input
          style={{ flex: "2" }}
          type="text"
          name="phone"
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.onChange}
        ></input>
        <input
          type="submit"
          value="Add new Building"
          className="btn"
          style={addbtn}
        ></input>
      </form>
    );
  }
}
const addbtn = {
  background: "green",
  color: "black",
  padding: "10px",
  border: "2px solid black",
  alligin: "center",
  flex: "1",
};
export default AddBuilding;
