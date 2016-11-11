import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import * as firebase from 'firebase';
import Chat from './Chat'

class App extends Component {


  componentDidMount(){
    var bigOne = document.getElementById('bigOne');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => bigOne.innerText = snap.val());
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2 id="bigOne"></h2>
        <Chat />

      </div>
    );
  }
}

export default App;
