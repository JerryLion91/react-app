import React, { Component } from 'react';
import { formatNumber } from '../helpers/formatHelpers';
import css from './header.module.css';

export default class Header extends Component {
  handleInputChange = ({ target }) => {
    this.props.onTyping(target.value);
  };

  render() {
    const { filter } = this.props;
    return (
      <label className={css.flexRow}>
        <input
          type="text"
          value={filter}
          onChange={this.handleInputChange}
          placeholder={'Type here'}
        />
        |
        <span className={css.countries}>
          Quantidade de Paises: <strong>{this.props.numCountries}</strong>
        </span>{' '}
        |
        <span className={css.population}>
          Populacao Total: <strong>{formatNumber(this.props.totalPop)}</strong>
        </span>
      </label>
    );
  }
}
