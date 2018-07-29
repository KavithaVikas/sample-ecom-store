import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cameraReducer from './cameraReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    camera:cameraReducer
});

export default rootReducer;