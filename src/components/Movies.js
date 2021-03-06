import React from 'react';
import {connect} from 'react-redux';
import {loadMovies} from '../actions/loader';
import {getIds, isMoviesLoading} from '../selectors/movies';
import Actions from './Actions';
import Movie from './Movie';

const MovieList = ({ids}) => (
  <div className="movies">
    {ids.map((id, i) => <Movie key={i} movieId={id} />)}
  </div>
);

class Movies extends React.Component {
  load = amount => () => this.props.loadMovies(amount);

  render() {
    const {ids, isLoading} = this.props;
    return (
      <div>
        <h1>Movie list</h1>
        <Actions load={this.load} />
        {!isLoading && <MovieList ids={ids} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ids: getIds(state),
  isLoading: isMoviesLoading(state),
});

export default connect(mapStateToProps, {loadMovies})(Movies);
