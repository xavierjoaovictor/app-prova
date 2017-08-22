/* Dependencies */
import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'
import firebase from 'firebase';

/* Components */
import logo from '../../../../assets/img/logo.png';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: ''
    }
  }

  componentDidMount() {
    const context = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('TEM USUARIO')
        context.setState({
          displayName: user.displayName
        })
      } else {
        console.log('NAO TEM USUARIO');
        context.setState({
          displayName: 'NO USER'
        })
      }
    });
  }
  render() {
    return (
      <div id="Header">
        <div className="container">
          <div id="MenuLogo">
            <img src={logo} alt="logo"/>
            <div id="Menu">
              <Link to="/newQuestions">
                <div className="MenuItem">New question</div>
              </Link>
              <Link to="/viewQuestions">
                <div className="MenuItem">View questions</div>
              </Link>
            </div>
          </div>
          <p>Hello <strong>{this.state.displayName}</strong></p>
        </div>
      </div>
    )
  }
}

export default HeaderMenu;