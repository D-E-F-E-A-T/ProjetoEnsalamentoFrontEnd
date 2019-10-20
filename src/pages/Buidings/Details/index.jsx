import React, { Component } from 'react';
import api from '../../../utils/API';
import { Link } from "react-router-dom";

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

        if (building.status) {
            building.status = "Usuário Ativo";
          } else {
            building.status = "Usuário Inativo";
          }

        return (
            <div className="usuario-info">
                <h1> {building.name} </h1>                
                <br />
                <Link to={`/buildings`}> Voltar </Link> <br/>
                <Link to={`/editarUsuario/${building.id}`}> Editar </Link> <br/>
                <Link to={`/deletarUsuario/${building.id}`}> Deletar </Link> <br/>
            </div>
        );
    }
}