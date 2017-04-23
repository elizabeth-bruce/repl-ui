const sendCode = function(state=null, action) {
    switch (action.type) {
        case 'setSendCode':
            return action.data.sendCode;
        default:
            return state;
    }
};

export default sendCode;
