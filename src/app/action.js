import axios from 'axios';

export function fetchDroneCameraList() {
    return function (dispatch) {
        return axios.get("http://localhost:5001/api/getProducts")
            .then(response => {
                dispatch({
                    type: "FETCH_DRONE_CAMERA_LIST_SUCCESS",
                    payload: response
                });
            }).catch((error) => {
                if (error.response.status == 404) {
                    dispatch({
                        type: "FETCH_DRONE_CAMERA_LIST_FAILURE",
                        payload: error.response.data,
                    });
                }
            });
    };
}