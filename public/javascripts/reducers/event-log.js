const eventLog = function(state = [], action) {
    switch (action.type) {
        case 'connectUser':
        case 'executionSuccess':
        case 'executionFailure':
        case 'disconnectUser':
        case 'registerAlias':
            return state.concat(action);
        default:
            return state;
    }    
};

export default eventLog;
