import React, { useState, useEffect} from 'react';
import api from '../../../utils/API';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const initialState = {
    building: {
        id: 0,
        name: "",
        status: true
    },
    erro: null
}

export default function BuildingDetails() {
    const [state, setState] = useState(initialState);
    const { id } = this.props.match.params;

    useEffect(() => {
        async function getBuilding() {
            const response = await api.get(`/Buildings/${id}`);

            setState({ building: response.data });
        }

        getBuilding();
    }, []);

    return (
        <form /*onSubmit={handleSubmit}*/>
    
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
                // value={state.building.name}
                // onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <Checkbox
                inputProps={{
                  'aria-label': 'primary checkbox',
                }}
                name="status"
                // value={state.building.status}
                // checked={state.building.status === true}
                // onChange={handleChangeCheckbox}
              />
            </div>
    
            <button type="submit" className="btn btn-primary">
              Send
                </button>
          </fieldset>
        </form>
      );
}