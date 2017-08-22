import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import firebase from 'firebase';

import NewQuestion from '../new-question/NewQuestion';
import HeaderMenu from '../../components/header-menu/HeaderMenu';

var config = {
  apiKey: "AIzaSyAjPTDNuiE35MBrHG1gGvxWuMfMGCmTs-s",
  authDomain: "appprovateste-5bae7.firebaseapp.com",
  databaseURL: "https://appprovateste-5bae7.firebaseio.com",
  projectId: "appprovateste-5bae7",
  storageBucket: "",
  messagingSenderId: "804101176528"
};
firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login');

class Home extends React.Component {
  login() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log("deu certo")
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log("NAO deu certo", errorMessage)
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Clique no menu para escolher uma página</h2>
        <button onClick={this.login}>FAZER LOGIN</button>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderMenu/>
          <Route exact path="/" component={Home}/>
          <Route path="/newQuestions" component={NewQuestion}/>
        </div>
      </Router>
    )
  }
}

export default App;