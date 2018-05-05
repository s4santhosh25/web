import axios from 'axios';
import {ApiUrl} from '../config';

let state = {
    type: 'AUTH',
    auth: false,
    status: 'unauthorized',
    token: null
};

export const Auth = () => {
    return new Promise(function (resolve, reject) {
        let newState = {
            ...state
        };

        axios({
            method: 'post',
            url: ApiUrl + '/api/verify',
            data: null,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('main.token')}`,
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            if (res.data.auth && res.data.status === "authorized") {
                newState.auth = res.data.auth;
                newState.token = res.data.token;
                newState.status = res.data.status;
                resolve(newState);
            } else {
                resolve(newState);
            }
        }).catch((err) => {
            if (err) 
                resolve({type: 'ERR', auth: false, status: 'unauthorized', token: null});
            }
        );
    });
}