import React, { Component } from 'react';
import PageLayout from './PageLayout';
// import PropTypes from 'prop-types';

class Configuracoes extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      <PageLayout className="configuracoes-container" title="Configurações">
        Conteudo show
      </PageLayout>
    );
  }
}

// Configuracoes.PropTypes = {}
// Configuracoes.defaultProps = {}

export default Configuracoes;