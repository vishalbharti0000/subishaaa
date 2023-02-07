import { combineReducers } from "redux";

import { PersonReducer } from "./PersonReducer";
import { ProductReducer } from "./ProductReducer";
import { UserReducer } from "./UserReducer";

const reducers = combineReducers({
    persons: PersonReducer,
    products: ProductReducer,
    users: UserReducer,
});

export default reducers;
