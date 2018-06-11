import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList';
import Header from './Header';
import firebase from 'firebase';
import MessageBox from './MessageBox';
class App extends Component {
  constructor(props){
    super(props);
    const firebase = require('firebase/app');
    
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB1cpNoEjAKH85NtGbHmk-1elzIGUCwxc0",
    authDomain: "messaging-app-d8013.firebaseapp.com",
    databaseURL: "https://messaging-app-d8013.firebaseio.com",
    projectId: "messaging-app-d8013",
    storageBucket: "messaging-app-d8013.appspot.com",
    messagingSenderId: "812532380893"
  };
  firebase.initializeApp(config);

  }
  render() {
    return (
      <div className="App">
      <Header title="Hello! Welcome to the messaging app"/><span>
      <div className="writerComponent"><MessageBox db={firebase}/></div>
      <div className="readerComponent"><MessageList db={firebase}/></div>
      </span>      
      </div>
    );
  }
}

export default App;
