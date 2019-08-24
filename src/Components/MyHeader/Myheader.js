import React, { Component } from 'react';
// *****Style****
import './Myheader.css';
// ********Bootstrap******
import { Container, Col, Row, FormControl } from 'react-bootstrap';

import StarRatingComponent from 'react-star-rating-component'

class Myheader extends Component {
    render() {
        return (
            <Container className='header-cont'>
                <Row >
                    <Col md={8}>
                        <FormControl name='searchBox'
                            placeholder="Search movie by name...."
                        // onChange={this.props.search}
                        />
                    </Col>
                    <Col className="search-rate" md={4}>
                        <StarRatingComponent className="star-rating"
                            name="rate1"
                            starCount={5}
                            starRatedColor="yellow"
                            // onStarClick={this.props.rating.bind(this)}
                            numberOfStars={5}

                        />
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Myheader
