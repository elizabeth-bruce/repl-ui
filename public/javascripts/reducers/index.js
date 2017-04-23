import { combineReducers } from 'redux';
import eventLog from './event-log';
import activeUsers from './active-users';
import sessionId from './session-id';
import sendCode from './send-code';

const replUIApp = combineReducers({
    eventLog,
    activeUsers,
    sessionId,
    sendCode
});

export default replUIApp;
