import _ from 'lodash';
import activeUserColors from '../config/active-user-colors';

const initialState = {
    activeUsers: [],
    availableColors: activeUserColors.slice(),
    defaultColor: activeUserColors[0]
};

const activeUsersFn = function(state = initialState, action) {
    let availableColors, defaultColor, activeUsers, color;

    switch (action.type) {
        case 'setActiveUsers':
            availableColors = activeUserColors.slice();
            defaultColor = availableColors[0];

            activeUsers = action.data.map((user) => 
                Object.assign({}, user, { color: availableColors.pop() || defaultColor }));

            return { activeUsers, availableColors, defaultColor };

        case 'connectUser':
            [color=state.defaultColor, ...availableColors] = state.availableColors;

            let user = Object.assign({}, action.data, { color });
            
            activeUsers = state.activeUsers.concat(user);
            defaultColor = state.defaultColor;

            return { activeUsers, availableColors, defaultColor };

        case 'registerAlias':
           userId = action.data.userId;
           let renamedUser = _(state.activeUsers).find({ userId });

           if (!renamedUser) {
               return state;
           }

           renamedUser = Object.assign({}, renamedUser, { alias: action.data.newAlias });
           activeUsers = _(state.activeUsers).reject((user) => (user.userId === action.data.userId))
                                             .concat(renamedUser).value();

           return Object.assign({}, state, { activeUsers });

        case 'disconnectUser':
            let userId = action.data.userId,
                removedUser = _(state.activeUsers).find({ userId }),
                removedColor = removedUser.color;

            availableColors = _(state.availableColors.concat(removedColor)).uniq().value(),
            activeUsers = _(state.activeUsers).reject((user) => (user.userId === action.data.userId)).value(),
            defaultColor = state.defaultColor;

            return { activeUsers, availableColors, defaultColor };

        default:
            return state;
    }
};

export default activeUsersFn;
