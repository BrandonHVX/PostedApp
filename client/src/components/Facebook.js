import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }

  responseFacebook = response => {
    // console.log(response);
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: response.accessToken }, null, 2)],
      { type: 'application/json' }
    )
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    }
    fetch('http://localhost:4000/api/v1/auth/facebook', options).then(r => {
      const token = r.headers.get('x-auth-token')
      r.json().then(user => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token })
        }
      })
    })
  }

  componentClicked = () => console.log('clicked')

  render() {
    let fbContent

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: '400px',
            margin: 'auto',
            background: '#f4f4f4',
            padding: '20px'
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      )
    } else {
      fbContent = (
        <FacebookLogin
          appId="2563832483712539"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      )
    }

    return <div>{fbContent}</div>
  }
}
