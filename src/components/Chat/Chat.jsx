import React, { Component } from 'react';
import './chat.css';
import * as firebase from 'firebase';
import { logout } from '../../utilities/auth';


/**A component that handles chat messages*/

class Chat extends Component{

  /**Initializes the Chat
  * message => Current type message
  * messages => All messages in the chat
  */
  constructor(props, context){
    console.log("Initialized Chat");
    super(props, context);
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      message: '',
      messages: []
    };
  }

/** Life-cycle method which will be called by react.
*   Allows real-time sychronization of data.
*   Listens for changes in database.
*/
  componentDidMount(){
      console.log('componentDidMount');
      var dbRef = firebase.database().ref('chatMessages/');
      dbRef.on('value', snap => {

          const currentMessages = snap.val();

          if(currentMessages != null){
            this.setState({
              messages: currentMessages
            })
          }
      });
  }

/**Renders messages with materialize component*/
  renderMessage(message){
    return(
      <div className="row">
        <div id="display-message" className="col s12 m5">
          <div className="card-panel teal">
            <span className="white-text">
              {message}
            </span>
            </div>
          </div>
        </div>
    );
  }

/**Places the user typed message in the state*/
  updateMessage(event){
    console.log('updateMessage: ' + event.target.value);
    this.setState({
      message: event.target.value
    });
  }

/**Submits a message and updates the state for the message list*/
  submitMessage(event){
    console.log('submitMessage: ' + this.state.message);
    const d = new Date();
    const messageDate = d.toDateString();
    const messageTime = d.toTimeString();
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message,
      date: messageDate,
      time: messageTime
    };

    firebase.database().ref('chatMessages/' + nextMessage.id).set(nextMessage);
    var messageForm = document.getElementById('message-form');
    messageForm.reset();

    /**var list = Object.assign([], this.state.messages);
    list.push(nextMessage);
    this.setState({
      messages: list
    });*/

  }


  render() {
        const currentMessages = this.state.messages.map((message) => {
          return(
            <li key={message.id}>{this.renderMessage(message.text)}</li>
          )
        });

    return (
      <div className="Chat">
        <button id="btn-logout"className="waves-effect waves-light btn teal lighten-5" type="submit" onClick={() => {logout()}}>
          <span className="teal-text text-darken-2">Logout</span>
        </button>
            <h4>Messages:</h4>
            <div className="container">
              <ul>
                {currentMessages}
              </ul>
              <div className="row">
                <form id="message-form" className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <i className="material-icons prefix">mode_edit</i>
                      <textarea id="icon_prefix2" className="materialize-textarea" onChange={this.updateMessage}></textarea>
                      <label for="icon_prefix2">Message</label>
                    </div>
                  </div>
                </form>
                  <button className="btn waves-effect waves-light" type="submit" onClick={this.submitMessage}>
                  Submit
                  <i className="material-icons right">send</i>
                  </button>
              </div>
            </div>
          </div>
    );
  }

}

export default Chat;
