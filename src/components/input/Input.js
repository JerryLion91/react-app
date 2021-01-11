import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { description, value } = this.props;
    return (
      <label>
        {description}
        <input type="text" value={value} readOnly={true} allowCopy={true} />
      </label>
    );
  }
}
