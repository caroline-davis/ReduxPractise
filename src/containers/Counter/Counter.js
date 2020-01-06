import React, { Component } from 'react';

// connect is a function that returns a higher order component used on the export
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
}
// connect is a function that returns a function 
// defines which slice of the state do you want to get in this container
// and what actions do you want dispatched

//returns an object of a map of prop names and slices of the state stored in redux

//this reaches out to the redux state, which is what we created as 'initialState' in store/reducer.js
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

// this calls dispatch on the store behind the scenes

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch ({type: 'ADD'}),
        onSubtractCounter: () => dispatch ({type: 'SUBTRACT'})

    };
}
// if you are passing no state but need actions... put eg. (null, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);