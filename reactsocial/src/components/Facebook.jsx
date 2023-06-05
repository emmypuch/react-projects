import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


export class Facebook extends Component {
    state = {
        isLoggedIn:  false,
        userId: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        console.log(response)
    }

    componentClicked = () => console.log('clicked')

  render() {
    // eslint-disable-next-line no-unused-vars
    let fbContent;
    if (this.state.isLoggedIn) {
        fbContent = null
    } else {
        fbContent = (
            <FacebookLogin 
                appId=''
                autoLoad={true}
                fields='names, email,picture'
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />
        )
    }

    return (
      <div>
        {fbContent}
      </div>
    );
  }
}

export default Facebook;
