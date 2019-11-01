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
    room: [],
    erro: null
}

export default function MainRooms(props) {
    const [state, setState] = useState(initialState);
    const classes = useStyles();
    const { room } = state;

    useEffect(() => {
        async function getRooms() {
            const response = await api.get(`/Rooms`);

            setState({ room: response.data });
        }

        getRooms();
    }, []);

    return (
        <Paper className={classes.root}>
            <Title>Salas de Aula</Title>
            <Button href={"room/create"} className={classes.button} color="primary" variant="contained">
                Criar Sala
            </Button>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Prédio</TableCell>
                        <TableCell>Capacidade Máxima</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="center">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {room.map((room, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {room.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {room.building.name}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {room.maxCapacity}
                            </TableCell>
                            <TableCell>{room.status ? "Ativo" : "Inativo"}</TableCell>
                            <TableCell align="center">
                                <Button href={"room/details/" + room.id} className={classes.button}>
                                    Detalhes
                                </Button>
                                <Button href={"room/update/" + room.id} className={classes.button}>
                                    Alterar
                                </Button>
                                <ComponentDelete 
                                    nameState="room" 
                                    getRoute="/Rooms" 
                                    setState={setState} 
                                    history={props.history} 
                                    deletePath={"rooms/" + room.id}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}