import React, { Component } from 'react'
import customers from './data';
import Filter from './Filter';
import CustomerRow from './CustomerRow';

export default class CustomerList extends Component {
    state = {
        "customers": customers,
        "complete" : customers
    }
   
    render() {
        return (
            <div>
                <Filter />
                {
                    this.state.customers.map(c => <CustomerRow customer={c} key={c.id} />)
                }                
            </div>
        )
    }
}
