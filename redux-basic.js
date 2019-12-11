const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0
}
//reducer

const rootReducer = (state= initialState,action) => {

    if(action.type === 'CTR_INCREMENT'){

        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === 'CTR_COUNTER'){

        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state;
}

//store
const gstore = createStore(rootReducer);
// console.log(gstore.getState());

//subscription
gstore.subscribe(()=>{
    console.log(gstore.getState());
})

//action
gstore.dispatch({type: 'CTR_INCREMENT'});
gstore.dispatch({type: 'CTR_COUNTER',value:10});
// console.log(gstore.getState());




















