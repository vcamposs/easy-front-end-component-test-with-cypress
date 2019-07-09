import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import UserForm from "./components/UserForm";

class App extends Component {
  state = {
    logradouros: null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.zipcode.value;
    if (user) {
      axios.get(`${process.env.REACT_APP_API_URL}/ws/${user}/json/`)
        .then((res) => {
          console.log('res.data : ' + res.data);
          const logradouros = res.data.logradouro;
          this.setState({ logradouros });
        })
    } else return;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" data-test="app-title">Search location with ZIP Code (BR)</h1>
          <h2 className="App-env" data-test="app-env">{process.env.REACT_APP_API_URL}</h2>
        </header>
        <UserForm getUser={this.getUser} />
        {this.state.logradouros ? <p data-test="location">Location : {this.state.logradouros}</p> : <p data-test="location">Put a BR zip code (ex.: 13023150)</p>}
      </div>
    );
  }
};

export default App;