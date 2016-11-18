import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
/**import * as firebase from 'firebase';*/
import Chat from './Chat';
import Login from './Login';

class App extends Component {

/*
  constructor(props){
    super(props);
  }*/

  /**componentDidMount(){
    var bigOne = document.getElementById('bigOne');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => bigOne.innerText = snap.val());
  }*/

  render() {
    var authenticated = false;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {
          (authenticated) ? <Chat /> : <Login />
        }

      </div>
    );
  }
}

export default App;
