import React, { Component } from "react";

export class AddBoiler extends Component {
  state = {
    skillsId: "",
    description: "",
    stock: "",
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBoiler(this.state);
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
          type="text"
          name="skillsId"
          placeholder="Skills ID"
          value={this.state.skillsId}
          onChange={this.onChange}
        ></input>
        <input
          style={{ flex: "2" }}
          type="text"
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.onChange}
        ></input>
        <input
          style={{ flex: "3" }}
          type="text"
          name="stock"
          placeholder="Stock"
          value={this.state.stock}
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
