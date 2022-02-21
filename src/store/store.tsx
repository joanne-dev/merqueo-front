import {combineReducers, createStore} from "redux";
import {shippingCartReducer} from "../reducers/shippingCartReducer";
import {devToolsEnhancer} from "redux-devtools-extension";

const reducers = combineReducers({
    cart: shippingCartReducer
});
export const store = createStore(reducers,
    devToolsEnhancer(
        {}
    )
);
