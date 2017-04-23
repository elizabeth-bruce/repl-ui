import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReplUI from './components/repl-ui';
import ReplUIApp from './reducers/index';

import handleInitialSetup from './lib/setup-websocket';

let store = createStore(ReplUIApp);

handleInitialSetup(store);
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
    <Provider store={store}>
        <ReplUI/>
    </Provider>,
    document.getElementById('app')
);
