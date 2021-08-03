import React from "react";
import ColorThief from "colorthief";
import placeholderPoster from "../../assets/placeholder-poster.png";
import "./MoveDetailsModal.css";
export class MovieDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.myposterRef = React.createRef();
    this.state = {
      imageColor: "green",
    };
  }
  componentDidMount() {
    console.log(this.props.movie);
  }

  getAverageRGB(imgPath) {
    const colorThief = new ColorThief();
    const img = this.myposterRef.current;
    let rgbString = "";
    if (img.complete) {
      let colorArr = colorThief.getColor(img);
      rgbString = `rgb(${colorArr[0]},${colorArr[1]},${colorArr[2]})`;
    } else {
      image.addEventListener("load", function () {
        let colorArr = colorThief.getColor(img);
        rgbString = `rgb(${colorArr[0]},${colorArr[1]},${colorArr[2]})`;
      });
    }

    let gradientString = `linear-gradient(to top, #ffff 0%,${rgbString})`;

    this.setState({
      gradientColor: gradientString,
      imageColor: rgbString,
    });
  }

  render() {
    const { movie } = this.props;
    return (
      <div
        onClick={(e) => this.props.closeModal()}
        className="movie-detail-backdrop"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="movie-detail-container"
        >
          <div className="movie-detail-content">
            <div className="movie-detail-grid">
              {/* <DetailNav navColor={this.state.imageColor} movie={movie} /> */}
              <div
                style={{
                  background: this.state.gradientColor,
                }}
                className="movie-detail-content-left"
              >
                <div className="movie-title">
                  <h2>{movie.title}</h2>
                </div>

                <div className="movie-plot">
                  <h3>SYNOPSIS</h3>

                  <div>{movie.fullplot}</div>
                </div>
              </div>
              <div className="movie-detail-content-right">
                <img
                  id="poster-id"
                  crossOrigin="Anonymous"
                  ref={this.myposterRef}
                  className="detail-poster"
                  alt={`${movie.title} poster`}
                  src={movie.poster ? movie.poster : placeholderPoster}
                  onError={(event) => (event.target.src = placeholderPoster)}
                  onLoad={(event) => this.getAverageRGB(movie.poster)}
                />
              </div>
            </div>

            <div className="suggestions">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
