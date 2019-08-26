import React, { Component } from 'react';
// *****Style****
import './Myheader.css';
// ********Bootstrap******
import { Container, Col, Row, FormControl } from 'react-bootstrap';
// *****redux*****
import { connect } from 'react-redux';
// ***** Start Component******
import StarRatingComponent from 'react-star-rating-component'
import { filterMovie } from '../../js/actions';

const mapDispatchToProps = {

    filterMovie:
        searchTerm => (filterMovie(searchTerm))
}


class connectedHeader extends Component {

    searchByName = event => {
        this.props.filterMovie(event.target.value)
    }
    render() {
        return (
            <Container className='header-cont'>
                <Row >
                    <Col md={8}>
                        <FormControl name='searchBox'
                            placeholder="Search movie by name...."
                            onChange={this.searchByName}
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
const Myheader = connect(null, mapDispatchToProps)(connectedHeader)

export default Myheader
