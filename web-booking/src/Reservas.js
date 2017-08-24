import React, { Component } from 'react';
import PageLayout from './PageLayout';
// import PropTypes from 'prop-types';

class Reservas extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      <PageLayout className="reservas-container" title="Faça sua reserva">
        Conteudo show
      </PageLayout>
    );
  }
}

// Reservas.PropTypes = {}
// Reservas.defaultProps = {}

export default Reservas;