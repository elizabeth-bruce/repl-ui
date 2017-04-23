const eventLog = function(state = [], action) {
    switch (action.type) {
        case 'connectUser':
            return state.concat(action);
        case 'executionSuccess':
            return state.concat(action);
        case 'executionFailure':
            return state.concat(action);
        case 'disconnectUser':
            return state.concat(action);
        default:
            return state;
    }    
};

export default eventLog;
