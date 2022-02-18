import React from 'react';
import proptype from 'prop-types'
class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>);
  }
}

Title.PropTypes = {
headline: PropTypes.string,
}.isRequired;
export default Title;
