import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      inputValue: null,
    };
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();
    this.setState({
      countries: json,
    });
  }

  handleTyping = ({ target }) => {
    const { countries } = this.state;
    const filteredArr = countries.filter(({ name }) => {
      return name.includes(target.value);
    });
    this.setState({
      countries: filteredArr,
    });
  };

  render() {
    return (
      <>
        <label>
          <input type="text" onChange={this.handleTyping} /> Quantidade de
          Paises: | Populacao Total:
        </label>
        <h3>Paises</h3>
        <ul>
          {this.state.countries.map((country) => {
            return <li>{country.name}</li>;
          })}
        </ul>
      </>
    );
  }
}
