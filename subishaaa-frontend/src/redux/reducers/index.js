import { combineReducers } from "redux";

import { PersonReducer } from "./PersonReducer";
import { ProductReducer } from "./ProductReducer";

const reducers = combineReducers({
    persons: PersonReducer,
    products: ProductReducer,
});

export default reducers;
