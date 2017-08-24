import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class PageLayout extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    const { className, title, children } = this.props;
    return (
      <div className={className}>
        <div className="page-header">
          <span>{title}</span>
        </div>
        <div className="page-content">
          {children}
        </div>
      </div>
    );
  }
}

// PageLayout.PropTypes = {}
// PageLayout.defaultProps = {}

export default PageLayout;