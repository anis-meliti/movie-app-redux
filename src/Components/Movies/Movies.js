import React from 'react';
// *******Redux******
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard'

const mapStateToProps = state => {
    return ({ moviesList: state.moviesList });
};

const connectedMovies = ({ moviesList }) => {
    return (
        <Container>
            <Row>
                {moviesList.map((movie, i) => <MovieCard
                    title={movie.title}
                    poster={movie.poster}
                    rating={movie.rating}
                    key={i} />)}
            </Row>
        </Container>
    )
}
const Movies = connect(mapStateToProps)(connectedMovies)
export default Movies
