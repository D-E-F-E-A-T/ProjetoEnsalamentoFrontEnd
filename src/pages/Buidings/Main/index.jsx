import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Title from '../../../components/Navigation/Title';
import api from '../../../utils/API';

const useStyles = () => ({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });

export default class MainUsuario extends Component {
    state = {
        building: [],
        erro: null
    }

    async componentDidMount() {

        const response = await api.get(`/Buildings`);
        
        this.setState({ building: response.data });

    }

    render() {
        const classes = useStyles();
        const { building } = this.state;
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
                                <TableCell>{building.status}</TableCell>
                                <TableCell align="center">Botões</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    };
}