import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      entries: []
    }
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEntriesChange = (event) => {
    this.setState({entries: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:1337/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        q1: this.state.q1
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user){
          this.props.onRouteChange('home')
        }
      })
  }

  render() {
    return (
      <article >
        <main >
          <div >
            <fieldset id="sign_up">
              <legend >Register</legend>
              <div >
                <label  htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
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
<div >
<p>Select Scale from 1 to 10</p>
                  <p>I am the life of the party</p>
                  <form action="/action_page.php">
                  <select
                    onChange={this.onEntriesChange}
                    value={this.state.whenMesuare}
                    type="select"
                    name="q1"
                    id="q1"
                    >
                    <option value="1">Strongly Disagree</option>
                    <option value="2">Disagree</option>
                    <option value="3">Neutral</option>
                    <option value="4">Agree</option>
                    <option value="5">Strongly Agree</option>

                  </select>
                </form>

</div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                type="submit"
                value="Register"
              />
            </div>
          </div>

        </main>
      </article>
    );
  }
}

export default Register;
