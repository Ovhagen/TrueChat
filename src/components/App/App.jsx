import React, { Component } from 'react';
import logo from '../../logo.svg';
import './app.css';
import Chat from '../Chat/Chat';
import Login from '../Login/Login';
import { firebaseAuth } from '../../utilities/constants';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      authed: false
    }
  }

  componentDidMount() {
    console.log("Did mount");
     firebaseAuth().onAuthStateChanged((user) => {
         if (user) {
           console.log(user.displayName);
           this.setState({
             authed: true
           });
         }else{
           console.log("Not signed in");
           this.setState({
             authed: false
           });
         }
       })
   }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {
          (this.state.authed) ? <Chat /> : <Login />
        }
        <div id="event"></div>

      </div>
    );
  }
}

export default App;
