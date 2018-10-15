import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Profiles from './components/Profiles/Profiles.js'
import Home from './components/Home/Home.js'
import Chat from './components/Chat/Chat.js'
import Footer from './components/Footer/Footer.js'
import './App.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000')
      // .then(response => response.json())
      .then(data => console.log(data))
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }


  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
      //there are two states on the sign out
    } else if (route === 'home' || route === 'Survey' || route === 'Chat' || route === 'Profiles') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">

        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'Profiles'
              ? <div>
                <Profiles />
                <Footer />
                </div>

                  :(route === 'Chat'
                    ? <div>
                      <Chat />
                      <Footer />
                      </div>


                      :(route === 'home'
                      ? <div>
                          <Home />
                        </div>
                        : (
                           route === 'signin'
                           ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                           : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                        )
                      )
                    )
         }
      </div>
    );
  }
}

export default App;
