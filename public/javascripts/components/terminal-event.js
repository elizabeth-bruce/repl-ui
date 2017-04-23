import React, {Component} from 'react';

const style = {
    background: {
        background: '#000000',
        color: '#ffffff',
        fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%'
    },
    alias: {
        color: '#45A203'
    },
    result: {
        color: '#45A203'
    },
    failure: {
        color: '#B1263C'
    }
};


function TerminalEvent(props) {
    let eventPane;

    switch (props.type) {
        case 'executionSuccess':
            eventPane = ([
                <span style={style.alias}>{props.data.alias}</span>,
                <span>{props.data.code}</span>,
                <br/>,
                <span style={style.result}>{props.data.result}</span>,
            ]);
            break;
        case 'executionFailure':
            eventPane = ([
                <span style={style.alias}>{props.data.alias}</span>,
                <span>{props.data.code}</span>,
                <br/>,
                <span style={style.failure}>{props.data.error}</span>
            ]);
            break;
        case 'connectUser':
            eventPane = (
                <span>
                    <span style={style.alias}>{props.data.alias}</span> has joined the session.
                </span>
            );
            break;
        case 'registerAlias':
            eventPane = (
                <span>
                    <span style={style.alias}>{props.data.oldAlias}</span> is now known as <span style={style.alias}>{props.data.newAlias}</span>.
                </span>
            );
            break;
        case 'disconnectUser':
            eventPane = (
                <span>
                    <span style={style.alias}>{props.data.alias}</span> has left the session.
                </span>
            );
            break;
        default:
            break;
    }

    return (
        <div style={style.background}>
            {eventPane}
        </div>
    );

}

export default TerminalEvent;
