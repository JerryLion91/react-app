import React from 'react';
import Input from './components/input/Input';

/**
 * react-text-transformer
 * input editavel
 *
 * inputs read-only:
 *  Texto invertido
 *  texto numerico: (maiusculas, O = 0, L = 1, E = 3, A = 4, S = 5, T = 7)
 *  CSV: (palavras envolvida em "" e separadas por ;)
 *  Slug: (minusculas, palavras separadas por -)
 *  Somente vogais: (preservar espacos)
 *  Somente consoantes: (preservar espacos)
 *  camelCase: Primera palavra inicia em minusculas, demais palavras com o primeira maiusculas
 *
 */
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    };
  }
  render() {
    return (
      <div className={'container'}>
        <h3 className={'center-align'}>react-text-transformer</h3>
        <label className={'teal-text'}>
          <strong>Digite um Texto Qualquer:</strong>
          <input type="text" />
        </label>
        <h5 className={'center-align'}>Transformations</h5>
        <Input description={'Texto Invertido:'} />
        <Input description={'Texto Numerico:'} />
        <Input description={'CSV:'} />
        <Input description={'Slug:'} />
        <Input description={'Somente Vogais'} />
        <Input description={'Somente Consoantes:'} />
        <Input description={'Variavel'} />
      </div>
    );
  }
}
