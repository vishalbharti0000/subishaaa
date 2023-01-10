import { ActionTypes } from "../constants/action-types";

const initialState = {
    persons: [],
    status: "",
    responsePerson: {
        status: ""
    },
}

export const PersonReducer = (state = initialState, action = {} ) => {
    switch (action.type) {
        case ActionTypes.GET_PERSONS:
            if(action.payload.status === 200){
            return { ...state, status: action.payload.status, persons: action.payload.data };
            } 
            else return {...state, status: 500, persons: []}

        case ActionTypes.SEND_CONTACT_FORM:
            if(action.payload.status === 200)
                return { ...state, responsePerson: action.payload };
            return {...state, responsePerson: {status: 500}}

        default:
            return state;
    }
}