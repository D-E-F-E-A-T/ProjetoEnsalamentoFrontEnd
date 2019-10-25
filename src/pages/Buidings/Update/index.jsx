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

export default function BuildingDetails(props) {
    const [state, setState] = useState(initialState);
    const { id } = props.match.params;

    useEffect(() => {
        async function getBuilding() {
            const response = await api.get(`/Buildings/${id}`);
            console.log(response)
            setState({ building: response.data });
        }

        getBuilding();
    }, [id]);

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
      api.put('/buildings/' + id, state.building)
        .then(res => {
          
          props.history.push('/buildings')
          console.log(res);
          console.log(res.data);
        })
    }

    return (
        <form onSubmit={(e) => {handleSubmit(); e.preventDefault();}}>
          {console.log("Joça não funciouna")}
          <fieldset>
            <legend>Create Building </legend>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <TextField
                type="text"
                className="form-control"
                placeholder="name"
                name="name"
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
}