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
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import Days from '../../../utils/Enuns/Days'
import Shifties from '../../../utils/Enuns/Shifties'

const initialState = {
  room: {
    name: "",
    maxCapacity : 0,
    idBuilding: 0,
    active: true,
    daysDisponibilities : [],
    shitDisponibilities : []
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 350,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function CreateRoom(props) {
  const [state, setState] = useState(initialState);
  const [buildings, setBuildings] = useState([])
  const classes = useStyles();
  
  useEffect(() => {
    async function getBuildings() {
        const response = await api.get(`/Building`);
        let buildingOptions = [{ key: 0}];

        response.data.data.forEach( dado => {
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
    api.post('/room', state.room)
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


        <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Dias Disponiveis</InputLabel>
        <Select
          labelid="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          name="daysDisponibilities"
          value={state.room.daysDisponibilities}
          onChange={handleInputChange}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
          variant="outlined"
        >
          {Days.map((day, i) => (
            <MenuItem key={i} value={day.value}>
              <Checkbox checked={state.room.daysDisponibilities.indexOf(day.value) > -1} />
              <ListItemText primary={day.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label2">Turnos Disponiveis</InputLabel>
        <Select
          labelid="demo-mutiple-checkbox-label2"
          id="demo-mutiple-checkbox2"
          multiple
          name="shitDisponibilities"
          value={state.room.shitDisponibilities}
          onChange={handleInputChange}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
          variant="outlined"
        >
          {Shifties.map((shift, i) => (
            <MenuItem key={i} value={shift.value}>
              <Checkbox checked={state.room.shitDisponibilities.indexOf(shift.value) > -1} />
              <ListItemText primary={shift.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

        <Grid item xs={12}>
        <FormControlLabel
          control = {<Checkbox
              inputProps={{
                'aria-label': 'primary checkbox',
              }}
              color="primary"
              name="status"
              value={state.room.active}
              checked={state.room.active === true}
              onChange={handleChangeCheckbox}
            />}
            label={"Status (" + (state.room.active === true ? "Ativo" : "Inativo") + ")"}
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