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
  discipline: {
    name: "",
    code : "",
    numberStudents : "",
    idLoadHourly: 0,
    idCourse: 0,
    idTeam: 0,
    daysDisponibilities : [],
    shitDisponibilities : [],
    active: true,
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
  const [loadhourlies, setLoadhourlies] = useState([])
  const [courses, setCourses] = useState([])
  const [teams, setTeams] = useState([])
  const classes = useStyles();

  useEffect(() => {
    async function getLoadhourlies() {
        const response = await api.get(`/loadhourly`);
        let loadhourliesOptions = [{ key: 0}];

        response.data.data.forEach( dado => {
          let option = {
            value : dado.id,
            label : dado.description
          }
          loadhourliesOptions.push(option)
        })
        setLoadhourlies(loadhourliesOptions)
    }

    async function getCourses() {
      const response = await api.get(`/course`);
      let coursesOptions = [{ key: 0}];

      response.data.data.forEach( dado => {
        let option = {
          value : dado.id,
          label : dado.name
        }
        coursesOptions.push(option)
      })
      setCourses(coursesOptions)
    }

    async function getTeams() {
      const response = await api.get(`/team`);
      let teamsOptions = [{ key: 0}];

      response.data.data.forEach( dado => {
        let option = {
          value : dado.id,
          label : dado.name
        }
        teamsOptions.push(option)
      })
      setTeams(teamsOptions)
    }
  
    getLoadhourlies();
    getCourses();
    getTeams();
  }, []);

  const handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setState(prevState => ({
      discipline: { ...prevState.discipline, [name]: value }
    }));
  }

  const handleChangeCheckbox = event => {
    const name = event.target.name;
    event.persist();
    setState(prevState => ({
      discipline: { ...prevState.discipline, [name]: event.target.checked }
    }));
  };

  const handleChangeSelect = event => {
    const name = event.target.name;
    event.persist();
    setState(prevState => ({
      discipline: { ...prevState.discipline, [name]: event.target.value }
    }));
  };

  const handleSubmit = async () => {
    api.post('/discipline', state.discipline)
      .then(res => {
        console.log(res)
        props.history.push('/disciplines')
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
              label="Nome da Disciplina"
              value={state.discipline.name} 
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              fullWidth
              name="code"
              label="Código da Disciplina"
              value={state.discipline.code} 
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-number"
              label="Número de Alunos"
              value={state.discipline.numberStudents}
              onChange={handleInputChange}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              name="numberStudents"
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
              label="Carga Horária"
              name="idLoadHourly"
              className={classes.textField}
              value={state.discipline.load_hourly_id}
              onChange={handleChangeSelect}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Por Favor, seleciona a respectiva Carga Horária"
              margin="normal"
              variant="outlined"
              >
                {loadhourlies.map((option, index) => (
                  <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              fullWidth
              label="Curso"
              name="idCourse"
              className={classes.textField}
              value={state.discipline.course_id}
              onChange={handleChangeSelect}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Por Favor, seleciona o respectivo Curso"
              margin="normal"
              variant="outlined"
              >
                {courses.map((option, index) => (
                  <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              fullWidth
              label="Turma"
              name="idTeam"
              className={classes.textField}
              value={state.discipline.team_id}
              onChange={handleChangeSelect}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Por Favor, seleciona a respectiva Turma"
              margin="normal"
              variant="outlined"
              >
                {teams.map((option, index) => (
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
          value={state.discipline.daysDisponibilities}
          onChange={handleInputChange}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
          variant="outlined"
        >
          {Days.map((day, i) => (
            <MenuItem key={i} value={day.value}>
              <Checkbox color="primary" checked={state.discipline.daysDisponibilities.indexOf(day.value) > -1} />
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
          value={state.discipline.shitDisponibilities}
          onChange={handleInputChange}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
          variant="outlined"
        >
          {Shifties.map((shift, i) => (
            <MenuItem key={i} value={shift.value}>
              <Checkbox color="primary" checked={state.discipline.shitDisponibilities.indexOf(shift.value) > -1} />
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
              value={state.discipline.active}
              checked={state.discipline.active === true}
              onChange={handleChangeCheckbox}
            />}
            label={"Status (" + (state.discipline.active === true ? "Ativo" : "Inativo") + ")"}
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