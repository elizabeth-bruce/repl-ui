import * as popsicle from 'popsicle';
import config from '../config/config';

const handleInitialSetup = (store) => {
    return setCookie().then(() => store.dispatch(setSession()))
                      .then(() => store.dispatch(setActiveUsers()))
                      .then(() => store.dispatch(setWebsocket()))
                      .then(() => store.dispatch(setAssignAlias()))
                      .catch(console.log);
};

const setCookie = () => {
    const options = {
        method: 'GET',
        url: `${config.SERVER_HTTP_URL}/sessions/touch`,
        transport: popsicle.createTransport({ withCredentials: true })
    };

    return popsicle.request(options);
};

const setSession = () => {
    return (dispatch) => {
        const sessionRegex = /(?:\/sessions\/)(.+)/,
            hasSessionId = sessionRegex.test(window.location.pathname);

        if (hasSessionId) {
            let sessionId = sessionRegex.exec(window.location.pathname)[1];
            dispatch({ type: 'setSessionId', data: { sessionId }});
            return Promise.resolve();
        }

        const options = {
            method: 'POST',
            url: `${config.SERVER_HTTP_URL}/sessions`,
            transport: popsicle.createTransport({ withCredentials: true })
        };

        return popsicle.request(options).use(popsicle.plugins.parse('json'))
            .then((response) => dispatch({ type: 'setSessionId', data: { sessionId: response.body.uuid }}));
    }
};

const addUserDataToAction = (action, activeUsers, availableColors) => {
    const unrenderedActions = ['registerUser'];

    if (unrenderedActions.indexOf(action.type) > -1) {
        return action;
    }

    // Since this user is just connecting, they don't have a color yet, so we have to assign one to them manually.
    if (action.type === 'connectUser') {
        const color = availableColors[0],
            data = Object.assign({}, action.data, { color });

        return Object.assign({}, action, { data });
    };

    const userId = action.data.userId,
        actionUser = _.find(activeUsers, { userId }),
        userData = { 
            alias: actionUser.alias,
            color: actionUser.color
        };

    const data = Object.assign({}, action.data, userData);

    return Object.assign({}, action, { data });
};

const setWebsocket = () => {
    return (dispatch, getState) => {
        const sessionId = getState().sessionId;

        let socket = new WebSocket(`${config.SERVER_WS_URL}/sessions/${sessionId}`);
        socket.onmessage = function(msg) {
            const action = JSON.parse(msg.data);
            dispatch(addUserDataToAction(
                action, 
                getState().activeUsers.activeUsers,
                getState().activeUsers.availableColors
            ));
        }
    
        const sendCode = (code) => {
            const codeEvent = {
                verb: 'execute',
                data: { code }
            };

            socket.send(JSON.stringify(codeEvent));
        };

        dispatch({ type: 'setSendCode', data: { sendCode }});
    };
};

const setActiveUsers = () => {
    return (dispatch, getState) => {
        console.log(getState());
        const sessionId = getState().sessionId;

        const options = {
            method: 'GET',
            url: `${config.SERVER_HTTP_URL}/sessions/${sessionId}/activeUsers`,
            transport: popsicle.createTransport({ withCredentials: true })
        };

        return popsicle.request(options).use(popsicle.plugins.parse('json'))
                       .then((response) => dispatchSetActiveUsers(dispatch, response.body));
    };
};

const setAssignAlias = () => {
    return (dispatch, getState) => {
        const sessionId = getState().sessionId;
        const assignAlias = (alias) => {        
            const options = {
                method: 'POST',
                url: `${config.SERVER_HTTP_URL}/sessions/${sessionId}/alias`,
                transport: popsicle.createTransport({ withCredentials: true }),
                body: { alias }
            };

            return popsicle.request(options).use(popsicle.plugins.parse('json'));
        };

        dispatch({ type: 'setAssignAlias', data: { assignAlias }});
    };
};

const dispatchSetActiveUsers = (dispatch, data) => {
    const action = {
        type: 'setActiveUsers',
        data
    }; 

    dispatch(action);
};

export default handleInitialSetup;
