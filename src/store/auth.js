import axios from 'axios';
import {ApiUrl} from '../config';

class Auth {
    static verifyToken() {
        axios({
            method: 'post',
            url: ApiUrl + '/api/verify',
            data: null,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('main.token')}`,
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            console.log('Auth', res.data.auth);
            if (res.data.auth && res.data.status === "authorized") {
                return res.data.auth;
            } else {
                return false;
            }
        }).catch((err) => {
            console.log('Auth', err);
            if (err) 
                return false;
            }
        );
    };
}

export default Auth;