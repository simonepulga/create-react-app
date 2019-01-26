import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Elm from "react-elm-components";
import Time from "./components/Time";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>The page is rendering. If you see a clock here, Elm is working:</p>

        <Elm src={Time.Elm.Main} />
      </div>
    );
  }
}

export default App;
