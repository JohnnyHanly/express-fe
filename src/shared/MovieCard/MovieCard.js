import React, { Component } from "react";
import placeholderPoster from "../../assets/placeholder-poster.png";
import axios from "axios";
import "./MoveCard.css";

export class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleMovieDetails(movie) {
    console.log(movie);
    this.setState({
      movieDetailsVisible: !this.state.movieDetailsVisible,
    });
  }
  render() {
    const { movie } = this.props;
    return (
      <div onClick={() => this.props.customClickEvent(movie)} className="card">
        <img
          className="movie-poster"
          alt={`${movie.title} poster`}
          src={movie.poster ? movie.poster : placeholderPoster}
          onError={(event) => (event.target.src = placeholderPoster)}
        />
        <div className="card-content">
          <h4>
            <b>
              {movie.title} <span>({movie.year})</span>
            </b>
          </h4>
        </div>
      </div>
    );
  }
}
