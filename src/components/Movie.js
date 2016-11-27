import React from 'react';
import {connect} from 'react-redux';
import {makeGetMovie} from '../selectors/movies';

const Movie = ({data}) => (
  <div className="movie-card">
    <div>{data.TitleAndYear}</div>
    <div>{data.imdbRating}{' | '}{data.Metascore}</div>
  </div>
);

const makeMapStateToProps = () => {
  const getMovie = makeGetMovie();
  const mapStateToProps = (state, ownProps) => {
    console.log("Movie mapStateToProps");
    return {
      data: getMovie(state, ownProps.movieId)
    };
  };
  return mapStateToProps;
}

export default connect(makeMapStateToProps)(Movie);
