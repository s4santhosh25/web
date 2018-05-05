import axios from 'axios';
import {ApiUrl} from '../config';
import $ from 'jquery';
import toastr from 'toastr';

let initialState = {
    auth: false
};

const verifyToken = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case 'AUTH':
            axios({
                method: 'post',
                url: ApiUrl + '/api/login',
                data: action.data,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((res) => {
                // this.setState({spinner: false});
                console.log(res);
                if (res.data.data === "Login Successful") {
                    sessionStorage.setItem('main.token', res.data.token);
                    toastr.success(res.data.data);
                    $('#login').modal('close');
                    state.auth = true;
                    return state;
                } else {
                    toastr.error(res.data.data);
                    $('#login').modal('open');
                    return state;
                }
            }).catch((err) => {
                toastr.error(err);
                console.log(err);
                return state;
            });
            return state;
        case 'VERIFY':
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
                    state.auth = res.data.auth;
                    return state;
                } else {
                    return state;
                }
            }).catch((err) => {
                if (err) 
                    return state;
                }
            );
            return state;
        default:
            return state;
    }
}

export default verifyToken;