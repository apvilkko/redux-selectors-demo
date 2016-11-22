import React, { Component } from 'react';
import Layout from './components/Layout';
import CatPicLoader from './components/CatPicLoader';
import Devtools from './components/Devtools';

export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CatPicLoader />
        </Layout>
        <Devtools />
      </div>
    );
  }
}
