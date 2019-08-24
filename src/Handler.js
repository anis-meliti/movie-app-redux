import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Myheader from './Components/MyHeader/Myheader';
import Movies from './Components/Movies/Movies'

class Handler extends Component {
    render() {
        return (
            <Container>
                <Myheader />
                <Movies />
            </Container>
        )
    }
}

export default Handler
