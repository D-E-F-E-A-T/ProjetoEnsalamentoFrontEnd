import React, { useState } from "react";
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
  team: {
    name: "",
    status: true
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
}));

export default function CreateBuilding(props) {
  const [state, setState] = useState(initialState);

  const classes = useStyles();


  const handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setState(prevState => ({
      team: { ...prevState.team, [name]: value }
    }));
  }

  const handleChangeCheckbox = event => {
    const name = event.target.name;
    console.log(event)
    setState(prevState => ({
      team: { ...prevState.team, [name]: event.target.checked }
    }));
  };

  const handleSubmit = async () => {
    api.post('/teams', state.team)
      .then(res => {
        props.history.push('/teams')
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Typography component="h1" variant="h5">
        Criar Turma
      </Typography>
      <form onSubmit={(e) => {handleSubmit(); e.preventDefault();}} className={classes.form}>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Nome da Turma"
              name="name"
              value={state.team.name}
              onChange={handleInputChange}
            />
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
              value={state.team.status}
              checked={state.team.status === true}
              onChange={handleChangeCheckbox}
            />}
            label={"Status (" + (state.team.status === true ? "Ativo" : "Inativo") + ")"}
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