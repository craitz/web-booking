import React, { Component } from 'react';
import PageLayout from './PageLayout';
// import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      <PageLayout className="home-container" title="Olá, seja bem vindo!">
        Conteudo show
      </PageLayout>
    );
  }
}

// Home.PropTypes = {}
// Home.defaultProps = {}

export default Home;