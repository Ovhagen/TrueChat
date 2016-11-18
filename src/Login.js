import React, { Component } from 'react';
//import C from './constants';
import './css/Login.css';
import * as firebase from 'firebase';


class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      user: '',
      email: '',
      password: ''
    };
    this.signInWithGoogle = this.signInWithGoogle.bind(this);
  }

  async signInWithGoogle(event){
    console.log("In GoogleAuth");
    var provider = new firebase.auth.GoogleAuthProvider();

    const user = {
      return firebase.auth().signInWithPopup(provider);
    }

      this.setState{
        user: user
      }
  }

  render(){
    return(
      <div className="Login">
        <h4>Enter your credentials</h4>
        <div className="row">
          <form id="auth-form" className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label for="password">Password</label>
                </div>
              </div>
              <button className="waves-effect waves-light btn" type="submit" name="action" onClick={this.signInWithGoogle}>
                Login
              </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
