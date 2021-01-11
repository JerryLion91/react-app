import React from 'react';
import Countries from './components/Countries';
import Header from './components/Header';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allCountries: [],
      countries: [],
      countriesPop: 0,
      filter: '',
    };
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();
    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        flag,
        population,
      };
    });

    const countriesPop = this.calculateTotalPopFrom(allCountries);

    this.setState({
      allCountries,
      countries: allCountries,
      countriesPop,
    });
  }

  handleTyping = (newText) => {
    const { allCountries } = this.state;

    const filteredCountries = allCountries.filter(({ name }) => {
      return name.toLowerCase().includes(newText.toLowerCase());
    });
    const countriesPop = this.calculateTotalPopFrom(filteredCountries);
    this.setState({
      countries: filteredCountries,
      filter: newText,
      countriesPop,
    });
  };

  calculateTotalPopFrom = (countries) => {
    return countries.reduce((acc, country) => {
      return acc + country.population;
    }, 0);
  };

  render() {
    const { countries, countriesPop, filter } = this.state;
    return (
      <>
        <h2>React Countries</h2>
        <Header
          filter={filter}
          onTyping={this.handleTyping}
          totalPop={countriesPop}
          numCountries={countries.length}
        />
        <h3>Paises</h3>
        <Countries countries={countries} />
      </>
    );
  }
}
