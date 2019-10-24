import React, { useState } from "react";
import api from '../../../utils/API';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const initialState = {
  building: {
    name: "",
    status: true
  },
  erro: null
}

export default function CreateBuilding(props) {
  const [state, setState] = useState(initialState);

  // useEffect(() => {

  // }, []);

  const handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setState(prevState => ({
      building: { ...prevState.building, [name]: value }
    }));
  }

  const handleChangeCheckbox = event => {
    const name = event.target.name;
    console.log(event)
    setState(prevState => ({
      building: { ...prevState.building, [name]: event.target.checked }
    }));
  };

  const handleSubmit = async () => {
    api.post('/buildings', state.building)
      .then(res => {
        props.history.push('/buildings')
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <form onSubmit={handleSubmit}>

      <fieldset>
        <legend>Create Building </legend>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <TextField
            type="text"
            className="form-control"
            placeholder="name"
            minLength="2"
            maxLength="40"
            value={state.building.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <Checkbox
            inputProps={{
              'aria-label': 'primary checkbox',
            }}
            name="status"
            value={state.building.status}
            checked={state.building.status === true}
            onChange={handleChangeCheckbox}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Send
            </button>
      </fieldset>
    </form>
  );

};