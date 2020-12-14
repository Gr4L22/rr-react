import React, { Component } from 'react';
import List from './list/Buildlist';

class Buildinglist extends Component {
    render() {
        return this.props.BuildingList.map(list => (
            <List key= {list.id} list={list} />
        ))
    }
}

export default Buildinglist
