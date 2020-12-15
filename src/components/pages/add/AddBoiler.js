import React, { Component } from "react";

export class AddBoiler extends Component {
  state2 = {
    skillsId: "",
    description: "",
    stock: "",
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddBoiler(this.state2);
    this.setState({
      skillsId: "",
      description: "",
      stock: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          style={{ flex: "3" }}
          type="number"
          name="skillsId"
          placeholder="Skills ID"
          value={this.state2.skillsId}
          onChange={this.onChange}
        ></input>
        <input
          style={{ flex: "2" }}
          type="text"
          name="description"
          placeholder="Description"
          value={this.state2.description}
          onChange={this.onChange}
        ></input>
        <input
          style={{ flex: "3" }}
          type="number"
          name="stock"
          placeholder="Stock"
          value={this.state2.stock}
          onChange={this.onChange}
        ></input>
        <input
          type="submit"
          value="Add new Boiler Type"
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
export default AddBoiler;
