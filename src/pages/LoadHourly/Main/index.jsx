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
    loadHourlies: [],
    erro: null
}

export default function MainLoadHourly(props) {
    const [state, setState] = useState(initialState);
    const classes = useStyles();
    const { loadHourlies } = state;

    useEffect(() => {
        async function getLoadHourlies() {
            const response = await api.get(`/loadhourlies`);

            setState({ loadHourlies: response.data });
        }

        getLoadHourlies();
    }, []);

    return (
        <Paper className={classes.root}>
            <Title>Carga Horária</Title>
            <Button href={"loadHourly/create"} className={classes.button} color="primary" variant="contained">
                Criar Carga Horaria
            </Button>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Descrição</TableCell>
                        <TableCell>Valor</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="center">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loadHourlies.map((loadHourly, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {loadHourly.description}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {loadHourly.value}
                            </TableCell>
                            <TableCell>{loadHourly.status ? "Ativo" : "Inativo"}</TableCell>
                            <TableCell align="center">
                                <Button href={"loadHorly/details/" + loadHourly.id} className={classes.button}>
                                    Detalhes
                                </Button>
                                <Button href={"loadHourly/update/" + loadHourly.id} className={classes.button}>
                                    Alterar
                                </Button>
                                <ComponentDelete 
                                    nameState="loadHourlies" 
                                    getRoute="/loadhourlies" 
                                    setState={setState} 
                                    history={props.history} 
                                    deletePath={"loadhourlies/" + loadHourly.id}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}