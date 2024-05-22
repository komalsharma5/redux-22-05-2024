import { combineReducers } from "redux";
import product_reducer from "./ProductReducer";
import number_reducer from "./NumberReducer";

const reducers = combineReducers({
    product: product_reducer,
    number: number_reducer
})

export default reducers