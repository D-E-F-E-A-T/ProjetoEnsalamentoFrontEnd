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
    disciplines: [],
    erro: null
}

export default function MainRooms() {
    const [state, setState] = useState(initialState);
    const classes = useStyles();
    const { disciplines } = state;

    useEffect(() => {
        async function getRooms() {
            const response = await api.get(`/disciplines`);

            setState({ disciplines: response.data });
        }

        getRooms();
    }, []);

    return (
        <Paper className={classes.root}>
            <Title>Disciplinas</Title>
            <Button href={"discipline/create"} className={classes.button} color="primary" variant="contained">
                Criar Disciplina
            </Button>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Numero Alunos</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="center">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {disciplines.map((discipline, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {discipline.name}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {discipline.numberStudents}
                            </TableCell>
                            <TableCell>{discipline.status ? "Ativo" : "Inativo"}</TableCell>
                            <TableCell align="center">
                                <Button href={"discipline/details/" + discipline.id} className={classes.button}>
                                    Detalhes
                                </Button>
                                <Button href={"discipline/update/" + discipline.id} className={classes.button}>
                                    Alterar
                                </Button>
                                <Button href={"discipline/delete/" + discipline.id} className={classes.button}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}