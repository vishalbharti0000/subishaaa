import { ActionTypes } from "../constants/action-types";

const initialState = {
    carouselProducts: [],
    carouselProductsStatus: "",
    products: [],
    productsStatus: "",
    responseProduct: { status: "" }
}

export const ProductReducer = (state = initialState, action = {} ) => {
    switch (action.type) {
        case ActionTypes.GET_CAROUSEL_ITEMS:
            if(action.payload.status === 200){
            return { ...state, carouselProductsStatus: action.payload.status, carouselProducts: action.payload.data };
            } 
            else return {...state, carouselProductsStatus: 500, carouselProducts: []}

        case ActionTypes.GET_PRODUCTS:
                if(action.payload.status === 200){
                return { ...state, productsStatus: action.payload.status, products: action.payload.data };
                } 
                else return {...state, productsStatus: 500, products: []}

        case ActionTypes.SEND_PRODUCT_FORM:
            if(action.payload.status === 200)
                return { ...state, responseProduct: action.payload };
            return {...state, responseProduct: {status: 500}}

        default:
            return state;
    }
}