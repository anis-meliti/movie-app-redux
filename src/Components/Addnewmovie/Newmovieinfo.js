import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, FormControl, Button, Container, Row } from 'react-bootstrap';

function mapDispatchToProps(dispatch) {
    return {
        // addTodo: todo => dispatch(addTodo(todo))
    };
}
const mapStateToProps = state => {
    // return { todos: state.todos };
};


class connectedNewmovieinfo extends Component {
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
                        Add new task...
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className='popup-cont'>
                        <Row>
                            <FormControl placeholder="Movie Name" id="title" onChange={this.onChangeHandler}  ></FormControl>
                        </Row>
                        <Row>
                            <FormControl placeholder="Poster's movie URL" id="poster" onChange={this.onChangeHandler}  ></FormControl>
                        </Row>
                        <Row>
                            <FormControl type='number' placeholder="Movie's rating" id="rating" onChange={this.onChangeHandler} ></FormControl>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.addNewItem}>Add Task</Button>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
const Newmovieinfo = connect(mapStateToProps, mapDispatchToProps)(connectedNewmovieinfo)
export default Newmovieinfo
