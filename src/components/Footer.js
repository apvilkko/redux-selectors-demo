import React from 'react';
import {connect} from 'react-redux';
import {is80sFan} from '../selectors/movies';

const Footer = ({isFan}) => (
  <footer>
    <p>Hi, I'm the footer.</p>
    {isFan && <span>EIGHTIES FAN!</span>}
  </footer>
);

const mapStateToProps = state => ({
  isFan: is80sFan(state)
});

export default connect(mapStateToProps)(Footer);
