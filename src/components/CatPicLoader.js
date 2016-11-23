import React from 'react';
import {connect} from 'react-redux';
import {loadPics} from '../actions/loader';
import {getAmount, getSources} from '../selectors/cats';
import Actions from './Actions';

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
        <h1>Cat pic loader</h1>
        <Actions load={this.load} />
        <Pics pics={pics} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const amount = getAmount(state);
  return {
    pics: getSources(amount)(state)
  };
};
export default connect(mapStateToProps, {loadPics})(CatPicLoader);
