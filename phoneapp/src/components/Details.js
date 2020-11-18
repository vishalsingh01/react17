import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        let id = this.props.match.params.id;
        return (
            <div>
                Details!!! {id}
            </div>
        )
    }
}
