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
    building: [],
    erro: null
}

export default function MainBuildings(props) {
    const [state, setState] = useState(initialState);
    const classes = useStyles();
    const { building } = state;

    useEffect(() => {
        async function getBuildings() {
            const response = await api.get(`/Building`);

            console.warn("response", response.data.data)
            setState({ building: response.data.data });
        }

        getBuildings();
    }, []);

    return (
        <Paper className={classes.root}>
            <Title>Prédios</Title>
            <Button href={"building/create"} className={classes.button} color="primary" variant="contained">
                Criar Prédio
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
                    {building.map((building, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {building.name}
                            </TableCell>
                            <TableCell>{building.active ? "Ativo" : "Inativo"}</TableCell>
                            <TableCell align="center">
                                <Button href={"building/details/" + building.id} className={classes.button}>
                                    Detalhes
                                </Button>
                                <Button href={"building/update/" + building.id} className={classes.button}>
                                    Alterar
                                </Button>
                                <ComponentDelete 
                                    nameState="building" 
                                    getRoute="/Buildings" 
                                    setState={setState} 
                                    history={props.history} 
                                    deletePath={"buildings/" + building.id}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}