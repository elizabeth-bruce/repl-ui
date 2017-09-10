# repl-ui

Quick-and-dirty UI frontend to the REPL JS server specified in [repl-server](https://github.com/elizabeth-bruce/repl-server).

# Installation

First, configure the server and port of the `repl-server` instance you will be connecting to in the config file specified [here](https://github.com/elizabeth-bruce/repl-ui/blob/master/public/javascripts/config/config.js).
```
SERVER_HTTP_URL: 'http://<serverUrl>:<serverPort>,
SERVER_WS_URL: 'ws://<serverUrl>:<serverPort>'
```

After this, configure your `repl-server` instance to expect your `repl-ui` connection [here](https://github.com/elizabeth-bruce/repl-server/blob/master/config/config.js).

```
FRONTEND_WHITELIST_DOMAIN: 'http://<frontendUrl>:<frontendPort>'
```

To compile your frontend UI:
```
npm run build
```

Then, for both your frontend and server:

`npm start`.

# Overview

To use the REPL UI, first create a session by making a `POST /sessions` request to the `repl-server` instance, as specified in the [repl-server documentation](https://github.com/elizabeth-bruce/repl-server). You should receive a `sessionId` response that specifies the name of the session you just created.

After this, navigate to the `GET /sessions/<sessionId>` endpoint of the `repl-ui` instance using a web browser to view the session.

### Further Development

This is a quick-and-dirty prototype of a frontend for `repl-server` and is not intended for production usage. A nonexhaustive list of work to productionalize the frontend here would include:

* Tests. There are no tests here. Bad developer.
* Better Webpack integration and a more complete build pipeline.
* Breaking out actions into their own separate files.
* Simplifying the `activeUsers` Redux object further, ideally via state normalization.
* Creating a fully [Jamstack](https://jamstack.org/)-compatible stack by moving routing from server-side to client-side; after this, the frontend server here would just share static assets and contain no business logic, which would mean we could move  off Express.
* Optionally updating our `lodash` dependencies to `lodash/fp` and incorporating [Immutable.js](https://facebook.github.io/immutable-js/).