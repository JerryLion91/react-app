import React, { Component } from 'react';
import css from './countries.module.css';

export default class Country extends Component {
  render() {
    const { name, flag } = this.props.country;
    return (
      <div className={css.border}>
        <img src={flag} alt={name} />
        {name}
      </div>
    );
  }
}
