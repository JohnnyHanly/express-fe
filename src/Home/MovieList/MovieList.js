import React, { Component } from "react";
import { MovieCard } from "../../shared/MovieCard";
import axios from "axios";
import "./MovieList.css";
import { connect } from "react-redux";
import { getMovies } from "../../redux/movies";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      doneLoading: false,
    };
  }
  async componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className="movie-list-containter">
        {this.state.movies.length > 0 ? (
          <ul className="movieList">
            {this.state.movies.map((movie, key) => (
              <MovieCard
                key={key}
                customClickEvent={this.props.handleMovieSelect}
                movie={movie}
              />
            ))}
          </ul>
        ) : (
          <div>fetching movies</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(getMovies()),
});

const ConnectedMovieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export { ConnectedMovieList as MovieList };
