import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allCountries: [],
      countries: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();
    this.setState({
      allCountries: json,
    });
  }

  handleTyping = ({ target }) => {
    const { allCountries } = this.state;
    const filteredArr = allCountries.filter(({ name }) => {
      return name.toLowerCase().includes(target.value.toLowerCase());
    });
    this.setState({
      countries: filteredArr,
    });
  };

  render() {
    const { countries } = this.state;
    return (
      <>
        <h1>React Countries</h1>
        <label>
          <input type="text" onChange={this.handleTyping} /> Quantidade de
          Paises: {countries.length}| Populacao Total:{' '}
          {countries.reduce((acc, country) => {
            return acc + country.population;
          }, 0)}
        </label>
        <h3>Paises</h3>
        <ul>
          {this.state.countries.map(({ name, numericCode, flag }) => {
            return (
              <li key={numericCode}>
                <img src={flag} />
                {name}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
