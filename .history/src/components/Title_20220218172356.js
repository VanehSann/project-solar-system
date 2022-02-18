import React from 'react';

const Title = class extends React.Component {
  render() {
    return (
      <h2>{this.props.headline}</h2>);
  }
}

export default Title;
