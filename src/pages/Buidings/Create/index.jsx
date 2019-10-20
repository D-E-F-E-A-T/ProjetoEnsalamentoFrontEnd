import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import api from '../../../utils/API';
import TextField from '@material-ui/core/TextField'

class CreateBuilding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      building: {
        name: "",
        status: 1
      },
      erro: null,
      redirect: false
    };
  }

  exibeErro() {
    const { erro } = this.state;

    if (erro) {
      return (
        <div className="alert alert-danger" role="alert">
          Erro de conexão com o servidor
        </div>
      );
    }
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          {this.exibeErro()}

          <fieldset>
            <legend>Create Building </legend>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <TextField
                type="text"
                className="form-control"
                id=""
                name="name"
                placeholder="name"
                minLength="2"
                maxLength="40"
                value={this.state.building.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <TextField
                type="number"
                className="form-control"
                id="status"
                name="status"
                aria-describedby="statusAjuda"
                placeholder="Status"
                value={this.state.building.status}
                onChange={this.handleInputChange}
              />
              </div>
           
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </fieldset>
        </form>
      );
    }
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState(prevState => ({
      building: { ...prevState.building, [name]: value }
    }));
  };

  handleSubmit = async() => {
    const { data: post } = await api.post('/buildings', this.state.building);
  }
}

export default CreateBuilding;