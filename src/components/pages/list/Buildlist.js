import React, { Component } from 'react'

export class Buildlist extends Component {
ulStyle = () => {
    return {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        backgroundColor: 'rgb(239,232,216)'
    }
}
liStyle = () => {
    return {
        float: 'left',
        display: 'block',
        width: '12%',
        color: 'rgb(0,0,0)',
        fontWeight: 600,
        fontSize: 13,
        textAlign: 'center',
        padding: '16px 10px 16px',
    }
}
    render() {
        return (
            <div>
                <ul style={this.ulStyle()}>
                    <li style={this.liStyle()}>{this.props.list.id}</li>
                    <li style={this.liStyle()}>{this.props.list.address}</li>
                    <li style={this.liStyle()}>{this.props.list.boilersId}</li>
                    <li style={this.liStyle()}>{this.props.list.fullName}</li>
                    <li style={this.liStyle()}>{this.props.list.phone}</li>
                    <button className= 'btn' style={btnDele}>D</button>
                    <button className= 'btn' style={btnModi}>M</button>
                </ul>
            </div>
        )
    }
}
const btnModi = {
    background: 'yellow',
    color: 'black',
    padding: '10px',
    border: '2px solid black',
    borderRadius: '50%',
    float: 'right',
    alligin: 'center',
}
const btnDele = {
    background: 'red',
    color: 'black',
    padding: '10px',
    border: '2px solid black',
    borderRadius: '50%',
    float: 'right',
}
export default Buildlist
