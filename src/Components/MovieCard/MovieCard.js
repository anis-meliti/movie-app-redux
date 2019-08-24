import React from 'react';
import { Container, Row } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import './MovieCard.css'


const MovieCard = ({ rating, poster, title }) => {
    return (
        <Container className='movie-cont'>
            <Row className="rating-row">
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={parseInt(rating)}
                />
            </Row>
            <Row >
                <img src={poster} alt='movie poster' className="movie-poster" />
            </Row>
            <Row className="movie-title">
                {title}
            </Row>
        </Container>
    )
}

export default MovieCard
