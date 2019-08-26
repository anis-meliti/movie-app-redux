import React, { Component } from 'react';
import { ButtonToolbar, Container, Row, Col } from 'react-bootstrap';
import NewMovieinfo from './Newmovieinfo';

class Addnewmovie extends Component {

    constructor() {
        super();
        this.state = {
            modalShow: false
        }
    }
    render() {
        return (

            <ButtonToolbar className='add-btn' onClick={() => this.setState({ modalShow: true })}>
                <Container className='adding-cont'  >
                    <Row className="image-row" >
                        <Col>
                            <img src={require("../../assets/plus.png")} alt='add icon' />
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

