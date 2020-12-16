import React, { Component } from "react";

export class Boilerlist extends Component {
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
    this.props.updateBoiler(this.state);
  };
  render() {
    const { id } = this.props.list;
    if (this.state.isEditing) {
      return (
        <ul style={this.ulStyle()}>
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
          <li style={this.liStyle()}>{this.props.list.skillsId}</li>
          <li style={this.liStyle()}>{this.props.list.description}</li>
          <li style={this.liStyle()}>{this.props.list.stock}</li>
          <button
            className="btn"
            style={btnDele}
            onClick={this.props.delBoild.bind(this, id)}
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
export default Boilerlist;
