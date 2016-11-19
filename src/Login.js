import React, { Component } from 'react';
//import C from './constants';
import './css/Login.css';
import { login } from './auth';


class Login extends Component{

    handleSubmit = (e) => {
      e.preventDefault();
      login(this.email.value, this.pw.value);
    }

  render(){
    return(
      <div className="Login">
        <h4>Enter your credentials</h4>
        <div className="row">
          <form id="auth-form" className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" ref={(email) => this.email = email}/>
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" ref={(pw) => this.pw = pw} />
                  <label for="password">Password</label>
                </div>
              </div>
              <button id="btn-login"className="waves-effect waves-light btn" type="submit" name="action">
                Login
              </button>
              <button id="btn-sign"className="waves-effect waves-light btn teal lighten-5" type="submit" name="action">
                <span className="teal-text text-darken-2">Sign Up</span>
              </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
