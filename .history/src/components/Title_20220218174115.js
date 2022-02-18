import React from 'react';

// const { headline } = this.props;
const Title  = (headline) => class extends React.Component {
  render() {
    return (
      <h2 headline={this.props}>{headline}</h2>);
  }
}

export default Title;
