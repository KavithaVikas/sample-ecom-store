import initialState from './initialState';

export default function cameraReducer(state = initialState.productsObj, action) {

switch(action.type){
    case "FETCH_DRONE_CAMERA_LIST_SUCCESS":
    return Object.assign({}, state, {
        cameraList: action.payload
    })
    case "ADD_TO_CART":
    let selectedItem = action.payload;
    console.log("selectedItem", selectedItem);
    let backUP = Object.assign({}, state, state.cameraList);
    let data = backUP.cameraList.data;
    let test = data.filter(element => selectedItem.selectedItemId == element.cameraId);
    console.log("test", test);
    
    return Object.assign({}, state, {
        addedToCart: true,
        addedItemCart:test
    })
    
    default:
            return state;

}

}