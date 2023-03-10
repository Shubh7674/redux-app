const initialState = {
    user:null
}

export default function userReducer(state = initialState, action){
    const { type, payload} = action;
    
    switch(type){
        case 'SET_USER':{
            return {
                ...state,
                user:payload
            }
        }
        default:{
            return state;
        }
    }
}