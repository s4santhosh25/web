import axios from 'axios';
import {ApiUrl} from '../config';

// let initialState = {     auth: false,     token: null,     status:
// 'unauthorized' };

let initialState = {
    auth: false,
    status: 'unauthorized',
    token: null
};

const verifyToken = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case 'AUTH':
            axios({
                method: 'post',
                url: ApiUrl + '/api/verify',
                data: null,
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('main.token')}`
                }
            }).then((res) => {
                if (res.data.auth && res.data.status === "authorized") {
                    state.auth = res.data.auth;
                    state.token = res.data.token;
                    state.status = res.data.status;
                    newState = {
                        ...state
                    };
                    return newState;
                } else {
                    return state;
                }
            }).catch((err) => {
                console.log(err);
                return state;
            });
            return state;
        default:
            return state;
    }
}
export default verifyToken;