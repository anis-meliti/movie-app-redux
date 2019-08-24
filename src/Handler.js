import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Myheader from './Components/MyHeader/Myheader';
import Movies from './Components/Movies/Movies'
import Addnewmovie from './Components/Addnewmovie/Addnewmovie'

class Handler extends Component {
    render() {
        return (
            <Container>
                <Myheader />
                <Movies />
                <Addnewmovie />
            </Container>
        )
    }
}

export default Handler
