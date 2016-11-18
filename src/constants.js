import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyACtsh65MZ5_TuekClMLFgZiw7wl9WHn2E",
    authDomain: "truechat-9cb17.firebaseapp.com",
    databaseURL: "https://truechat-9cb17.firebaseio.com",
    storageBucket: "truechat-9cb17.appspot.com",
    messagingSenderId: "608169497205"
  };
  firebase.initializeApp(config);

  const C = {
    FIREBASE: firebase
  };

  export default C;
