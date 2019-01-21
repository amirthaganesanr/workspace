import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './Search.jsx';
import MyOptions from './MyOptions.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({ visibleOptions: [], updatedOptions: [] });
    this.getMyOptions = this.getMyOptions.bind(this);
  }

  getMyOptions() {
    fetch("http://demo8969103.mockable.io/mock")
      .then(results => {
        return results.json();
      })
      .then(resultsJson => {
        console.log(resultsJson);
        this.setState({ visibleOptions: resultsJson.products });
      });
  }

  render() {
    return (
      <div className="App">
        <Search addOptions={this.getMyOptions} />
        <MyOptions options={this.state.visibleOptions} />
      </div>
    );
  }
}

export default App;
