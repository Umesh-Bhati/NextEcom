export  function CartReducer (state, action) {
    switch(action.type){
        case 'ADD_TO_CART' :
            return [
                action.payload,
                ...state
            ]
        case 'REMOVE_TO_CART' :
            return state.filter((i)=> i.id !== action.payload.id)  
        default:
             return state;
    }

}