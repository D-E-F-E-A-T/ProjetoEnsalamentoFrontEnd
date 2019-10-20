import React from 'react'
import ReactDOM from 'react-dom'
import Container from '@material-ui/core/Container';
import Routes from './routes';

const elemento = document.getElementById('root')

ReactDOM.render(
    <Container>
        <h1>Testando</h1>
        <Routes />
    </Container>    
, elemento)
