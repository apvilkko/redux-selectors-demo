import React from 'react';
import {connect} from 'react-redux';
import {loadPics} from '../actions/loader';

const Actions = ({load}) =>
  <div className="actions">
    {[1, 2, 3, 4].map((num, i) => <a key={i} onClick={load(num)}>{num}</a>)}
  </div>;

const Pics = ({pics}) =>
  <div>
    {pics.map((pic, i) => pic && <img key={i} src={pic} />)}
  </div>;

class CatPicLoader extends React.Component {
  load = amount => () => this.props.loadPics(amount);

  render() {
    const {pics} = this.props;
    return (
      <div>
        <Actions load={this.load} />
        <Pics pics={pics} />
      </div>
    );
  }
}

const getSrc = (key, state) => {
  if (state.api && state.api[key] && !state.api[key].loading) {
    return state.api[key].url;
  }
  return null;
}

const mapStateToProps = state => {
  const amount = state.api.amount;
  return {
    pics: Array.from(Array(amount)).map((_, i) => getSrc(i, state))
  };
};
export default connect(mapStateToProps, {loadPics})(CatPicLoader);
