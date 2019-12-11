import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/action/actionCreator';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    

    render () {
         let sResults = this.props.storeResults.map(el=>{
             return  <li key={el.id} onClick={() => this.props.deleteStoreResult(el.id)}>{el.value}</li>
         })
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementOnClick} />
                <CounterControl label="Decrement" clicked={this.props.decrementOnClick}  />
                <CounterControl label="Add 5" clicked={this.props.addValueOnClick}  />
                <CounterControl label="Subtract 5" clicked={this.props.substractValueOnClick}  />
                <hr />
                <button onClick={()=>this.props.storeResult(this.props.ctr)}>Store Result</button>
              
                <ul>
                    {sResults}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      ctr: state.ctr.counter,
      storeResults: state.res.result
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        incrementOnClick: ()=> dispatch(actionCreator.INCREMENT()),
        decrementOnClick: ()=> dispatch(actionCreator.DECREMENT()),
        addValueOnClick: ()=> dispatch(actionCreator.ADD_VALUE()),
        substractValueOnClick: ()=> dispatch(actionCreator.SUB_VALUE()),
        storeResult: (ctrValue) =>{ dispatch(actionCreator.STORE_RESULT(ctrValue))},
        deleteStoreResult: (id) =>{ dispatch(actionCreator.DELETE_STORE_RESULT(id))}
        
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Counter);