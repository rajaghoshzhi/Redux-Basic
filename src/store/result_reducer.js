const intialState = {
    result: []
}
const rootReducer = (state = intialState, action) => {
    switch(action.type){       
        case ('STORE_RESULT'):
            return {
                ...state,
                result: state.result.concat({id: new Date(), value: action.value})
            } 
        case ('DELETE_STORE_RESULT'):
                let id = action.eleVal;
                const updateArr = state.result.filter((el)=>{
                    if(el.id !== id){
                        return true
                    }
                })
                return {
                    ...state,
                    result: updateArr
                }     
    }

    return state;
}

export default rootReducer;