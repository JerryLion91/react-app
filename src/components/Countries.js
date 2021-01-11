import React, { Component } from 'react';
import Country from './Country';
import css from './countries.module.css';

export default class Countries extends Component {
  render() {
    return (
      <div className={`${css.border} ${css.flexRow}`}>
        {this.props.countries.map((country) => {
          return <Country country={country} />;
        })}
      </div>
    );
  }
}
