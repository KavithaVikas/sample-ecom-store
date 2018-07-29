import initialState from './initialState';

export default function cameraReducer(state = initialState.productsObj, action) {

switch(action.type){
    case "FETCH_DRONE_CAMERA_LIST_SUCCESS":
    return Object.assign({}, state, {
        cameraList: action.payload
    })
    default:
            return state;

}

}