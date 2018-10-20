import React from 'react';

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
    console.log(this.state);
    fetch('http://localhost:1337/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data === "OK mr. Pancho") {
          // this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
      console.log("no pos not se pudo mr.Pancho");
    }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article >
        <main >
          <div >
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend >Sign In</legend>
              <div >
                <label htmlFor="email-address">Email</label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div >
                <label  htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                type="submit"
                value="Sign in"
              />
            </div>
            <div >
              <p  onClick={() => onRouteChange('register')} >Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
