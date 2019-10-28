import React, { useState, useEffect } from "react";
import api from '../../../utils/API';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const initialState = {
  room: {
    name: "",
    maxCapacity : 0,
    building_id: 0,
    status: true,
  },
  erro: null
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  menu: {
    width: 200,
  },
}));



export default function CreateRoom(props) {
  const [state, setState] = useState(initialState);
  const [buildings, setBuildings] = useState([])
  const classes = useStyles();

  useEffect(() => {
    async function getBuildings() {
        const response = await api.get(`/Buildings`);
        let buildingOptions = [{ key: 0}];

        response.data.forEach( dado => {
          let option = {
            value : dado.id,
            label : dado.name
          }
          buildingOptions.push(option)
        })
        setBuildings(buildingOptions)
    }
  
    getBuildings();
  }, []);

  const handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setState(prevState => ({
      room: { ...prevState.room, [name]: value }
    }));
  }

  const handleChangeCheckbox = event => {
    const name = event.target.name;
    event.persist();
    setState(prevState => ({
      room: { ...prevState.room, [name]: event.target.checked }
    }));
  };

  const handleChangeSelect = event => {
    const name = event.target.name;
    event.persist();
    setState(prevState => ({
      room: { ...prevState.room, [name]: event.target.value }
    }));
  };

  const handleSubmit = async () => {
    api.post('/rooms', state.room)
      .then(res => {
        console.log(res)
        props.history.push('/rooms')
      })
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />

      <Typography component="h1" variant="h5">
        Criar Sala
      </Typography>
      <form onSubmit={(e) => {handleSubmit(); e.preventDefault();}}>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="name"
              label="Nome da Sala"
              value={state.room.name} 
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-number"
              label="Capaxidade Máxima"
              value={state.room.maxCapacity}
              onChange={handleInputChange}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              name="maxCapacity"
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              fullWidth
              label="Prédio"
              name="building_id"
              className={classes.textField}
              value={state.room.building_id}
              onChange={handleChangeSelect}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Por Favor, seleciona o respectivo prédio"
              margin="normal"
              variant="outlined"
              >
                {buildings.map((option, index) => (
                  <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid item xs={12}>
        <FormControlLabel
          control = {<Checkbox
              inputProps={{
                'aria-label': 'primary checkbox',
              }}
              color="primary"
              name="status"
              value={state.room.status}
              checked={state.room.status === true}
              onChange={handleChangeCheckbox}
            />}
            label={"Status (" + (state.room.status === true ? "Ativo" : "Inativo") + ")"}
          />
        </Grid>

        <Button 
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}>
          Cadastrar
        </Button>
      </form>
    </Container>
  );

};