import React, { Component } from 'react'

export default class LoadUser extends Component {
    state = {user: null};
    
    // get the user from server based on creditiantials provided
     getUser() {
        return Promise.resolve({ id: '1', name: 'Banuprakash' });
    }
    
    async componentDidMount() {
        let user = await this.getUser();
        this.setState({
            user
        })
    }
    render() {
        return (
            <>
              {this.state.user ? <p>Signed in as {this.state.user.name}</p> : null}
            </>
        )
    }
}