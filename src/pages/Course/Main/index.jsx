import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Title from '../../../components/Navigation/Title';
import Button from '@material-ui/core/Button';
import api from '../../../utils/API';
import { makeStyles } from '@material-ui/core';
import ComponentDelete from '../../../components/Dialogs/DialogDelete'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const initialState = {
    courses: [],
    erro: null
}

export default function MainCourse(props) {
    const [state, setState] = useState(initialState);
    const classes = useStyles();
    const { courses } = state;

    useEffect(() => {
        async function getCourses() {
            const response = await api.get(`/course`);

            setState({ courses: response.data });
        }

        getCourses();
    }, []);

    return (
        <Paper className={classes.root}>
            <Title>Cursos</Title>
            <Button href={"course/create"} className={classes.button} color="primary" variant="contained">
                Criar Curso
            </Button>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="center">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses.map((course, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {course.name}
                            </TableCell>
                            <TableCell>{course.active ? "Ativo" : "Inativo"}</TableCell>
                            <TableCell align="center">
                                <Button href={"course/details/" + course.id} className={classes.button}>
                                    Detalhes
                                </Button>
                                <Button href={"course/update/" + course.id} className={classes.button}>
                                    Alterar
                                </Button>
                                <ComponentDelete setState={setState} history={props.history} deletePath={"courses/" + course.id}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}