import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import api from '../../../utils/API';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const initialState = {
    building: {
        id: 0,
        name: ""
    }
}

export default function DeletarFuncionario(props) {
    const [state, setState] = useState(initialState);
    const classes = useStyles();
    const { id } = props.match.params;

    useEffect(() => {
        async function getBuilding() {
            const response = await api.get(`/Buildings/${id}`);
            console.log(response)
            setState({ building: response.data });
        }

        getBuilding();
    }, [id]);

    const handleClick = () => {
        const { id } = props.match.params;

        api.delete('/buildings/' + id)
        .then(res => {
          
          props.history.push('/buildings')
          console.log(res);
          console.log(res.data);
        })
    };

    return (
        <div>
            Certeza que deseja excluir o prédio {state.building.name}?
            <Button variant="outlined" color="secondary" className={classes.button} onClick={handleClick}>
                Sim
            </Button>
        </div>
    );
}