import React from 'react';
import {connect} from 'react-redux';
import {getMovie} from '../selectors/movies';

const Movie = ({data}) => (
  <div className="movie-card">
    <div>{data.Title} ({data.Year})</div>
    <div>{data.imdbRating}{' | '}{data.Metascore}</div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  data: getMovie(ownProps.movieId)(state)
});

export default connect(mapStateToProps)(Movie);
