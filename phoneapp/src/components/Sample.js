import React from 'react';

export default class Sample extends React.Component {
    state = { count: 0 }

    handleClick() {
        this.setState({
            count: this.textRef.value
        })
    }

    render() {
        return <>
            <input type="text" id="number" ref={input => this.textRef = input} />
            <div> <button onClick={() => this.handleClick()}> This is ADV Component </button> </div>
            <SomeComponent count={this.state.count} />
        </>
    }
}

class SomeComponent extends React.Component {

    shouldComponentUpdate(prevProps, prevState) {
        console.log(prevProps, this.props)
        if (prevProps.count === this.props.count) {
            return false;
        }
        return true;
    }

    render() {
        return <h1>{this.props.count}</h1>
    }
}