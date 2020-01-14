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
    teams: [],
    erro: null
}

export default function MainTeam(props) {
    const [state, setState] = useState(initialState);
    const classes = useStyles();
    const { teams } = state;

    useEffect(() => {
        async function getTeams() {
            const response = await api.get(`/team`);

            setState({ teams: response.data.data });
        }

        getTeams();
    }, []);

    return (
        <Paper className={classes.root}>
            <Title>Turmas</Title>
            <Button href={"team/create"} className={classes.button} color="primary" variant="contained">
                Criar Turma
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
                    {teams.map((team, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {team.name}
                            </TableCell>
                            <TableCell>{team.active ? "Ativo" : "Inativo"}</TableCell>
                            <TableCell align="center">
                                <Button href={"team/details/" + team.id} className={classes.button}>
                                    Detalhes
                                </Button>
                                <Button href={"team/update/" + team.id} className={classes.button}>
                                    Alterar
                                </Button>
                                <ComponentDelete 
                                    nameState="teams" 
                                    getRoute="/Teams" 
                                    setState={setState} 
                                    history={props.history} 
                                    deletePath={"teams/" + team.id}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}