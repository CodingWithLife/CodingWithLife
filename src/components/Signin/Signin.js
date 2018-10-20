import React from 'react';
import "./Signin.css"

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }
  onSubmitSignIn = () => {
//    fetch('http://localhost:3000/signin', {
//      method: 'post',
//      headers: {'Content-Type': 'application/json'},
//      body: JSON.stringify({
//        email: this.state.signInEmail,
//        password: this.state.signInPassword
//      })
// })
//      .then(response => response.json())
//      .then(user => {
//       if (user.id) {
//          this.props.loadUser(user)
          this.props.onRouteChange('home');
      //   }
      // })
  }
  render() {
    const { onRouteChange } = this.props;
    return (
      <break className= "test">
        <main className="main">
          <div className="measure">
            <fieldset id="sign_up" className="Signin-header">
              <legend >Sign In</legend>
              <div className="mt3">
                <label  htmlFor="email-address">Email</label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label  htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            <div>
              <button
                onClick={this.onSubmitSignIn}
                className="signinButton"
                type="submit"
                value="Sign in"
            >Sign in</button>
            </div>
            <div>
              <button
                onClick={this.onSubmitSignIn}
                className="registerButton"
                type="submit"
                value="Sign in"
            >Register</button>
            </div>
                        </fieldset>

          </div>
        </main>
      </break>
    );
  }
}

export default Signin;
