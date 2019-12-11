const intialState = {
    counter:0
}
const rootReducer = (state = intialState, action) => {
    console.log('counter reducer');
    switch(action.type){
        case ('INCREMENT'):
            return {
                ...state,
                counter: state.counter + 1,
            }
        case ('DECREMENT'):
                return {
                    ...state,
                    counter: state.counter - 1,
                }  
        case ('ADD_VALUE'):
                return {
                    ...state,
                    counter: state.counter + 5,
                }
        case ('SUB_VALUE'):
                return {
                    ...state,
                    counter: state.counter - 5,
                }  
      
    }

    return state;
}

export default rootReducer;