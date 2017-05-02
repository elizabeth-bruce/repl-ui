import { combineReducers } from 'redux';
import eventLog from './event-log';
import activeUsers from './active-users';
import sessionId from './session-id';
import sendCode from './send-code';
import assignAlias from './assign-alias';

const replUIApp = combineReducers({
    eventLog,
    activeUsers,
    sessionId,
    sendCode,
    assignAlias
});

export default replUIApp;
