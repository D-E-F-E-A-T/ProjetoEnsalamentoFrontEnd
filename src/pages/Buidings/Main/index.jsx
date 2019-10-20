import React, { Component } from 'react';
import { Link } from "react-router-dom";
import api from '../../../utils/API';

export default class MainUsuario extends Component {
    state = {
        building: [],
        erro: null
    }

    async componentDidMount() {

        const response = await api.get(`/Buildings`);
        
        this.setState({ building: response.data });

    }

    render() {
        const { building } = this.state;
        return building.map((building, index) => (

            <div key={index} className="usuario-info">
                <div className="card mb-4">
                    <h5 className="card-header">{building.name}</h5>
                    <div className="card-body">
                        <div className="media">
                            <div className="media-body">
                                <p>{building.name}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <Link
                                to={`/building/details/${building.id}`}
                                className="btn btn-success mr-3"
                                role="button" >
                                Detalhes
                            </Link>
                            <Link
                                to={`/deletarUsuario/${building.id}`}
                                className="btn btn-danger mr-3"
                                role="button">
                                Remover
                            </Link>
                            <Link
                                to={`/editarUsuario/${building.id}`}
                                className="btn btn-primary"
                                role="button">
                                Editar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))
    };
}