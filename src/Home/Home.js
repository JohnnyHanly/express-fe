import React, { Component } from "react";
import { MovieList } from "./MovieList";
import { getMovies } from "../redux/movies";
import { MovieDetailsModal } from "../shared/MovieDetailsModal";
import { connect } from "react-redux";
import axios from "axios";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetailsVisible: false,
      movies: {},
    };
  }
  async componentDidMount() { 
    this.temp(2,2)
  }

  temp = (x,y)=> {
    return x + y 
  }

  handleMovieSelect(selectedMovie) {
    this.setState({
      movie: selectedMovie,
    });
  }

  closeModal() {
    this.setState({
      movieDetailsVisible: false,
    });
  }

  render() {
    return (
      <div className="content">
        <MovieList handleMovieSelect={this.handleMovieSelect.bind(this)} />
        {this.state.movieDetailsVisible ? (
          <MovieDetailsModal
            closeModal={this.closeModal.bind(this)}
            movie={this.state.movie}
          />
        ) : null}
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

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export { ConnectedHome as Home };
