import React, { useState, useEffect} from 'react';
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
    course: {
        id: 0,
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

export default function UpdateCourse(props) {
    const [state, setState] = useState(initialState);
    const { id } = props.match.params;
    const classes = useStyles();

    useEffect(() => {
        async function getCourse() {
            const response = await api.get(`/courses/${id}`);
            console.log(response)
            setState({ course: response.data });
        }

        getCourse();
    }, [id]);

    const handleInputChange = event => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
  
      setState(prevState => ({
        course: { ...prevState.course, [name]: value }
      }));
    }

    const handleChangeCheckbox = event => {
      const name = event.target.name;
      console.log(event)
      setState(prevState => ({
        course: { ...prevState.course, [name]: event.target.checked }
      }));
    };

    const handleSubmit = async () => {
      api.put('/courses/' + id, state.course)
        .then(res => {
          
          props.history.push('/courses')
          console.log(res);
          console.log(res.data);
        })
    }

    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Typography component="h1" variant="h5">
        Criar Prédio
      </Typography>
      <form onSubmit={(e) => {handleSubmit(); e.preventDefault();}} className={classes.form}>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="name"
              label="Nome do Prédio"
              value={state.course.name}
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
              value={state.course.status}
              checked={state.course.status === true}
              onChange={handleChangeCheckbox}
            />}
            label={"Status (" + (state.course.status === true ? "Ativo" : "Inativo") + ")"}
          />
          
        </Grid>

        <Button 
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}>
          Alterar
        </Button>
      </form>
    </Container>
      );
}