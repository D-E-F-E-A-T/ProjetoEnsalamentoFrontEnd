import React, { Component } from 'react';
import api from '../../../utils/API';

export default class BuildingDetails extends Component {
    state = {
        building: {
            id: 0,
            name: "",
            status: ""
        },
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
             
        const response = await api.get(`/buildings/${id}`);
        console.log(response)
        this.setState({ building: response.data });
    }

    render() {
        const { building } = this.state;

        return (
            <div className="usuario-info">
                <h1> {building.name} </h1>                
                <br />
            </div>
        );
    }
}