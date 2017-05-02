const assignAlias = function(state=null, action) {
    switch (action.type) {
        case 'setAssignAlias':
            return action.data.assignAlias;
        default:
            return state;
    }
};

export default assignAlias;
