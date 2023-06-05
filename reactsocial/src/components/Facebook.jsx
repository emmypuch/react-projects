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
    let fbContent;
    if (this.state.isLoggedIn) {
        //
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
        hi
      </div>
    );
  }
}

export default Facebook;
