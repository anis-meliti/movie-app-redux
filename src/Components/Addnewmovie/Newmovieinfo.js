import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../../js/actions/index'
import { Modal, FormControl, Button, Container, Row } from 'react-bootstrap';

function mapDispatchToProps(dispatch) {
    return {
        addMovie: movie => dispatch(addMovie(movie))
    };
}


class connectedNewmovieinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            rating: ''
        }
    }
    onChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    addNewMovie = () => {
        const title = this.state.title;
        const poster = this.state.poster;
        const rating = this.state.rating;
        this.props.addMovie({ title, poster, rating });
        this.setState({
            title: '',
            poster: '',
            rating: ''
        });
        this.props.onHide();

    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new movie...
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className='popup-cont'>
                        <Row>
                            <FormControl
                                placeholder="Movie Name"
                                name="title"
                                onChange={this.onChangeHandler}
                                defaultValue={this.state.title} />
                        </Row>
                        <Row>
                            <FormControl
                                placeholder="Poster's movie URL"
                                name="poster"
                                onChange={this.onChangeHandler}
                                defaultValue={this.state.poster} />
                        </Row>
                        <Row>
                            <FormControl
                                type='number'
                                placeholder="Movie's rating"
                                name="rating"
                                onChange={this.onChangeHandler}
                                defaultValue={this.state.rating} />
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.addNewMovie}>Add movie</Button>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
const Newmovieinfo = connect(null, mapDispatchToProps)(connectedNewmovieinfo)
export default Newmovieinfo
