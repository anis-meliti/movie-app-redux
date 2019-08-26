import React, { Component } from 'react';
// *******Redux******
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard'
// import _ from 'lodash'

const mapStateToProps = state => {
    if (state.searchTerm) return { moviesList: state.moviesList.filter(movie => movie.title.toLowerCase().includes(state.searchTerm.toLowerCase())) }
    console.log('from maptoprops', { moviesList: state.moviesList });
    return ({
        moviesList: state.moviesList
    });
};

class connectedMovies extends Component {


    render() {
        console.log('from render', this.props.moviesList);
        return (
            <Container>
                <Row>

                    {
                        this.props.moviesList.map((movie, i) => <MovieCard
                            title={movie.title}
                            poster={movie.poster}
                            rating={movie.rating}
                            key={i} />)
                    }
                </Row>
            </Container>
        )

    }
}
const Movies = connect(mapStateToProps)(connectedMovies)
export default Movies