import React from 'react';
import {connect} from 'react-redux';
import {isSomethingLoading} from '../selectors/extra';

const Header = props => (
  <header>
    <span>redux selectors demo</span>
    <div>
      <span>Info stuff: </span>
      {props.isSomethingLoading && <span>loading</span>}
    </div>
  </header>
);

const mapStateToProps = state => ({
  isSomethingLoading: isSomethingLoading(state)
});

export default connect(mapStateToProps)(Header);
