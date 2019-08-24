import React, { Component } from 'react';
import { ButtonToolbar, Container, Row, Col } from 'react-bootstrap';
import NewMovieinfo from './Newmovieinfo';
import { plus } from '../../assets/plus.png'

class Addnewmovie extends Component {

    constructor() {
        super();
        this.state = {
            modalShow: false
        }
    }
    render() {
        return (

            <ButtonToolbar className='add-btn'>
                <Container className='adding-cont'  >
                    <Row className="image-row" >
                        <Col>
                            <img src={require(plus)} alt='add icon' />
                        </Col>
                    </Row>
                </Container>
                <NewMovieinfo
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                />
            </ButtonToolbar>
        );
    }


}

export default Addnewmovie

