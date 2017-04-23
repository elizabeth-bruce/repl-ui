import * as popsicle from 'popsicle';
import config from '../config/config';

let socket;

const handleInitialSetup = (store) => {
    const sessionRegex = /(?:\/sessions\/)(.+)/,
        hasSessionId = sessionRegex.test(window.location.pathname);

    let sessionCreated;
    if (hasSessionId) {
        let sessionId = sessionRegex.exec(window.location.pathname)[1];
        sessionCreated = setCookie().then(() => sessionId);
    }
    else {
        sessionCreated = setCookie().then(createSession);
        sessionCreated.catch(console.log);
    }

    sessionCreated.then((sessionId) => setActiveUsers(store, sessionId))
                  .then((sessionId) => setupWebsocket(store, sessionId));
};

const createSession = () => {
    const options = {
        method: 'POST',
        url: `${config.SERVER_HTTP_URL}/sessions`,
        transport: popsicle.createTransport({ withCredentials: true })
    };

    return popsicle.request(options)
                   .use(popsicle.plugins.parse('json'))
                   .then((response) => response.body.uuid)
                   .catch(console.log);

};

const setupWebsocket = (store, sessionId) => {
    socket = new WebSocket(`${config.SERVER_WS_URL}/sessions/${sessionId}`);
    socket.onmessage = function(msg) {
        const action = JSON.parse(msg.data);
        store.dispatch(action);
    }
    
    const sendCode = (code) => {
        const codeEvent = {
            verb: 'execute',
            data: { code }
        };

        socket.send(JSON.stringify(codeEvent));
    };

    store.dispatch({ type: 'setSessionId', data: { sessionId }});
    store.dispatch({ type: 'setSendCode', data: { sendCode }});
};

const setCookie = () => {
    const options = {
        method: 'GET',
        url: `${config.SERVER_HTTP_URL}/sessions/touch`,
        transport: popsicle.createTransport({ withCredentials: true })
    };

    return popsicle.request(options);
};

const dispatchSetActiveUsers = (store, data) => {
    const action = {
        type: 'setActiveUsers',
        data
    }; 

    store.dispatch(action);
};

const setActiveUsers = (store, sessionId) => {
    console.log(sessionId);
    const options = {
        method: 'GET',
        url: `${config.SERVER_HTTP_URL}/sessions/${sessionId}/activeUsers`,
        transport: popsicle.createTransport({ withCredentials: true })
    };

    return popsicle.request(options)
        .use(popsicle.plugins.parse('json'))
        .then((response) => dispatchSetActiveUsers(store, response.body))
        .then(() => sessionId);
};

export default handleInitialSetup;
