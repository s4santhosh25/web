let initialState = {
    auth: false,
    status: 'unauthorized',
    token: null
};

const verifyToken = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case 'AUTH':
            if (action.auth && action.status === "authorized") {
                state.auth = action.auth;
                state.token = action.token;
                state.status = action.status;
                return state;
            } else {
                return state;
            }
        default:
            console.log('default', state);
            return state;
    }
}
export default verifyToken;