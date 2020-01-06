import React, { Component } from 'react';

// connect is a function that returns a higher order component used on the export
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                         <li key={strResult.id} onClick={this.props.onDeleteResult}>{strResult.value}</li>
                    ))}
                </ul>
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
        ctr: state.counter,
        storedResults: state.results
    };
};

// this calls dispatch on the store behind the scenes

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch ({type: 'ADD', val: 10}),
        onSubtractCounter: () => dispatch ({type: 'SUBTRACT', val: 15}),
        onStoreResult: () => dispatch ({type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch ({type: 'DELETE_RESULT'})


    };
}
// if you are passing no state but need actions... put eg. (null, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);