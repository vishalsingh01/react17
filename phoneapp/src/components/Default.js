import React, { Component } from 'react'

import {Redirect} from 'react-router-dom';

export default class Default extends Component {
    render() {
        return (
            <div>
                <Redirect path="/" />
            </div>
        )
    }
}
