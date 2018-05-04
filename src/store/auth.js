import axios from 'axios';
import promise from 'bluebird';
import {ApiUrl} from '../config';

let state = {
    type: 'AUTH',
    auth: false,
    status: 'unauthorized',
    token: null
};

export const Auth = () => {
    let deferred = promise.defer();
    return axios({
        method: 'post',
        url: ApiUrl + '/api/verify',
        data: null,
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('main.token')}`,
            'Access-Control-Allow-Origin': '*'
        }
    }).then((res) => {
        if (res.data.auth && res.data.status === "authorized") {
            state.auth = res.data.auth;
            state.token = res.data.token;
            state.status = res.data.status;
            deferred.resolve(state);
        } else {
            deferred.resolve(state);
        }
        return deferred.promise;
    }).catch((err) => {
        if (err) 
            deferred.resolve({type: 'ERR', auth: false, status: 'unauthorized', token: null});
        return deferred.promise;
    });
}