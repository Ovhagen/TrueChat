import React, { Component } from 'react';
import './css/Chat.css'
/**import * as firebase from 'firebase';*/

class Chat extends Component{

  /**Initializes the Chat*/
  constructor(props, context){
    console.log("Initialized Chat")
    super(props, context);
    this.state = {
      chatMessages: [
        {id:0, text:'first'},
        {id:1, text:'second'},
        {id:2, text:'third'}
      ]
    };
  }

  /**componentDidMount(){
    var bigOne = document.getElementById('bigOne');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => {
    this.setState({
      chatMessages: snap.val()
    });
  });
  }*/


/**Renders messages with materialize component*/
  renderMessage(message){
    return(
      <div className="row">
        <div className="col s12 m5">
          <div className="card-panel teal">
            <span className="white-text">
              message
            </span>
            </div>
          </div>
        </div>
    );
  }


  render() {
        const currentMessages = this.state.chatMessages.map((message, i) => {
          return(
            <li key ={message.id}>message.text</li>
          )
        })

    return (
      <div className="Chat">
            Messages:
            <ol>
              {currentMessages}
            </ol>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                    <label for="icon_prefix2">Message</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
    );
  }

}

export default Chat;
