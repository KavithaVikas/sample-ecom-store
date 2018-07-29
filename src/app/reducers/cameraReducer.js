import initialState from './initialState';

export default function cameraReducer(state = initialState.productsObj, action) {

    switch (action.type) {
        case "FETCH_DRONE_CAMERA_LIST_SUCCESS":
            return Object.assign({}, state, {
                cameraList: action.payload
            })
        case "ADD_TO_CART":
            let selectedItem = action.payload;
            
            let backUP = Object.assign({}, state, state.cameraList);
            let data = backUP.cameraList.data;
            let filteredData = data.filter(element => selectedItem.selectedItemId == element.cameraId);
            

            return Object.assign({}, state, {
                addedToCart: true,
                addedItemCart: filteredData
            })
        case 'REMOVE_FROM_CART':
            let selectedItemForRemove = action.payload;
            let copyOfObject = Object.assign({}, state, state.cameraList);
            let result = copyOfObject.cameraList.data;
            let finalArray = result.filter(element => selectedItemForRemove.selectedItemId != element.cameraId);
            return Object.assign({}, state, {
                removedFromCart: true,
                addedItemCart: []
            })

        default:
            return state;

    }

}