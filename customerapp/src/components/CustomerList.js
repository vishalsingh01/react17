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
                <Filter filterEvent = {(txt) => this.filterCustomers(txt) }/>
                {
                    this.state.customers.map(c => <CustomerRow customer={c} deleteEvent={(id) => this.deleteCustomer(id)} key={c.id} />)
                }                
            </div>
        )
    }

    filterCustomers(txt) {
        let custs = this.state.complete.filter(c => c.lastName.toLowerCase().indexOf(txt.toLowerCase()) >= 0);
        this.setState({
            "customers": custs
        })
    }

    deleteCustomer(id) {
        console.log("Customer List", id);
        let custs = this.state.customers.filter(c => c.id !== id);
        this.setState({
            "customers": custs
        })
    }
}
