import React, { Component } from "react";

export class Buildlist extends Component {
  state = { ...this.props.list, isEditing: false };
  ulStyle = () => {
    return {
      listStyleType: "none",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      backgroundColor: "rgb(239,232,216)",
    };
  };
  liStyle = () => {
    return {
      float: "left",
      display: "block",
      width: "12%",
      color: "rgb(0,0,0)",
      fontWeight: 600,
      fontSize: 13,
      textAlign: "center",
      padding: "16px 10px 16px",
    };
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  saveChanges = () => {
    this.toggleEdit();
    this.props.updateBuilding(this.state);
  };
  render() {
    const { id } = this.props.list;
    if (this.state.isEditing) {
      return (
        <ul style={this.ulStyle()}>
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
          <div>
            <button onClick={this.toggleEdit} className="btn" style={btnDele}>
              C
            </button>
            <button onClick={this.saveChanges} className="btn" style={btnModi}>
              A
            </button>
          </div>
        </ul>
      );
    }

    return (
      <div>
        <ul style={this.ulStyle()}>
          <li style={this.liStyle()}>{this.props.list.id}</li>
          <li style={this.liStyle()}>{this.props.list.address}</li>
          <li style={this.liStyle()}>{this.props.list.boilersId}</li>
          <li style={this.liStyle()}>{this.props.list.fullName}</li>
          <li style={this.liStyle()}>{this.props.list.phone}</li>
          <button
            onClick={this.props.delBuild.bind(this, id)}
            className="btn"
            style={btnDele}
          >
            D
          </button>
          <button onClick={this.toggleEdit} className="btn" style={btnModi}>
            M
          </button>
        </ul>
      </div>
    );
  }
}
const btnModi = {
  background: "yellow",
  color: "black",
  padding: "10px",
  border: "2px solid black",
  borderRadius: "50%",
  float: "right",
  alligin: "center",
};
const btnDele = {
  background: "red",
  color: "black",
  padding: "10px",
  border: "2px solid black",
  borderRadius: "50%",
  float: "right",
};
export default Buildlist;
