import React, { Component } from 'react'

export default class CustomerRow extends Component {

    render() {
        // let customer = this.props.customer;
        let {id,firstName,lastName} = this.props.customer;
        return (
            <div className="row">
                <span className="data">{firstName}</span>
                <span className="data">{lastName}</span>
                <button type="button">&times;</button>
            </div>
        )
    }
}
