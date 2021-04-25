import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from 'redux-thunk';

import { authReducers } from "../reducers/authReducers";
import { uiReducer } from "../reducers/uiReducers";

const reducers = combineReducers({
    auth: authReducers,
    ui: uiReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(ReduxThunk)
    )
);