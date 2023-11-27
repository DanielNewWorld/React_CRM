import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import servicesItemReducer from './servicesItem-reducer';
import firmReducer from './firm-reducer';
import userReducer from './userItem-reducer';
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    servicesData: servicesItemReducer,
    firmData: firmReducer,
    userData: userReducer,
    form: formReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;