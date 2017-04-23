const sessionId = function(state=null, action) {
    switch (action.type) {
        case 'setSessionId':
            return action.data.sessionId;
        default:
            return state;
    }
};

export default sessionId;
