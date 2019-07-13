import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import calculationReducer from "./calculationReducer"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
        form: formReducer,
        calc: calculationReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;