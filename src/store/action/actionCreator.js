import * as actionType from '../action/actionType';

export const INCREMENT = () => {
    return {
        type: actionType.INCREMENT
    }  
}

export const DECREMENT = () => {
    return {
        type: actionType.DECREMENT
    }
}

export const ADD_VALUE = () => {
    return {
        type: actionType.ADD_VALUE
    }
}

export const SUB_VALUE = () => {
    return {
        type: actionType.SUB_VALUE 
    }
}

export const STORE_RESULT = (val) => {
    return dispatch =>{    
        setTimeout(()=>{
            return dispatch({
                type: actionType.STORE_RESULT,
                value: val
            })
        },2000)
    }
}

export const DELETE_STORE_RESULT = (val) => {
    return {
        type: actionType.DELETE_STORE_RESULT,
        value: val
    }
}