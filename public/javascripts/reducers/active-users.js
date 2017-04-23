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
                Object.assign({}, user, { color: availableColors.pop() || fallbackColor }));

            return { activeUsers, availableColors, defaultColor };

        case 'connectUser':
            [color=state.fallbackColor, ...availableColors] = state.availableColors;

            let user = Object.assign({}, action.data, { color });
            
            activeUsers = state.activeUsers.concat(user);
            defaultColor = state.defaultColor;

            return { activeUsers, availableColors, defaultColor };

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
