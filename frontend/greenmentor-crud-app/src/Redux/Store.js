
import {thunk} from "redux-thunk"
import {legacy_createStore,combineReducers,applyMiddleware} from "redux"

import {Reducer as userReducer} from "./userReducer/Reducer";
import {Reducer as postReducer} from "./postReducer/Reducer";

const rootReducer = combineReducers(
    {    userReducer,
         postReducer
    }
);

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));