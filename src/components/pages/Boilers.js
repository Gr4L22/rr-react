import React, { Component } from 'react'
import List from './list/Boilerlist';

export class Boilers extends Component {
    render() {
        return this.props.BoilersList.map(list => (
            <List key= {list.id} list={list} />
        ))
    }
}

export default Boilers