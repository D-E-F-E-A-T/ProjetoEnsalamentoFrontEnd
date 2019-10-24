import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Title from '../../../components/Navigation/Title';
import api from '../../../utils/API';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

const initialState = {
    building: [],
    erro: null
}

export default function MainUsuario() {
    const [state, setState] = useState(initialState);
    const classes = useStyles();
    const { building } = state;

    useEffect(() => {
        async function getBuildings() {
            const response = await api.get(`/Buildings`);

            setState({ building: response.data });
        }

        getBuildings();
    }, []);

    return (
        <Paper className={classes.root}>
            <Title>Prédios</Title>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="center">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {building.map((building, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {building.name}
                            </TableCell>
                            <TableCell>{building.status ? "Ativo" : "Inativo"}</TableCell>
                            <TableCell align="center">Botões</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}