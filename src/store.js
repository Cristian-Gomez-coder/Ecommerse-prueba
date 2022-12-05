import {applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { legacy_createStore as createStore} from 'redux'
import rootReducer from './redux/reducers'

const initialState = {};

const middleware =[thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

)
export default store;