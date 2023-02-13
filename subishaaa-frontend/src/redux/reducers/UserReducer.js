import { ActionTypes } from "../constants/action-types";

const initialState = {
    responseUser: { status: "" },
    loggedInUser: { status: "" },
    responseOrder: { status: "" },
    myOrders: { loading: true, orders: [] },
    orders: { loading: true, orders: [] },
    sendPaymentStatus: "",
    sendStatusChangeStatus: "",

}

export const UserReducer = (state = initialState, action = {} ) => {
    switch (action.type) {
        case ActionTypes.SEND_REGISTRATION_FORM:
            if(action.payload.status === 200)
                return { ...state, responseUser: action.payload };
            return {...state, responseUser: {status: 500}};

        case ActionTypes.SEND_LOGIN_FORM:
            if(action.payload.status === 200) {
                sessionStorage.setItem("json", JSON.stringify(action.payload.data));
                return { ...state, loggedInUser: action.payload };
            }
            return { ...state, loggedInUser: {status: action.payload.status} };

        case ActionTypes.CLEAR_LOGIN_STATUS:
            return {...state, loggedInUser: {status: ""}}

        case ActionTypes.LOGOUT_USER:
            sessionStorage.removeItem("json");
            return {...state};

        case ActionTypes.SEND_ORDER_FORM:
            if(action.payload.status === 200)
                return { ...state, responseOrder: action.payload };
            return {...state, responseOrder: {status: 500}};
        
        case ActionTypes.GET_MY_ORDERS:
            return { ...state, myOrders: { loading: false, orders: action.payload.data } };

        case ActionTypes.GET_ALL_ORDERS:
            return { ...state, orders: { loading: false, orders: action.payload.data } };

        case ActionTypes.SEND_PAYMENT_DONE:
            return { ...state, sendPaymentStatus: action.payload}

        case ActionTypes.SEND_STATUS_CHANGE:
            return { ...state, sendStatusChangeStatus: action.payload}

        case ActionTypes.CLEAR_STATUS_PAYMENT_DONE:
            return { ...state, sendStatusChange: "", sendStatusChangeStatus: ""}

        default:
            return state;
    }
}