import React, {Component} from 'react';

const style = {
    background: {
        background: '#000000',
        color: '#ffffff',
        fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
        minHeight: 0
    },
    result: {
        color: '#45A203'
    },
    failure: {
        color: '#B1263C'
    }
};

const aliasStyle = (props) => ({ color: props.data.color });
const renderCode = (code) => {
    return code.split('\n').map((item, key) => <span key={key}>{item.replace(/\s/g, '\u00A0')}<br/></span>);
};

function TerminalEvent(props) {
    let eventPane;

    const aStyle = aliasStyle(props);

    switch (props.type) {
        case 'executionSuccess':
            eventPane = (
                <span>
                    <span>
                        <span style={aStyle}>{props.data.alias}</span>>{' '}
                        <br/>
                    </span>
                    <span>{renderCode(props.data.code)}</span>
                    <br/>
                <span style={style.result}>{props.data.result}</span>
                </span>
            );
            break;
        case 'executionFailure':
            eventPane = (
                <span>
                    <span>
                        <span style={aStyle}>{props.data.alias}</span>>{' '}
                        <br/>
                    </span>
                    <span>{renderCode(props.data.code)}</span>
                    <br/>
                    <span style={style.failure}>{props.data.error}</span>
                </span>
            );
            break;
        case 'connectUser':
            eventPane = (
                <span>
                    <span style={aStyle}>{props.data.alias}</span> has joined the session.
                </span>
            );
            break;
        case 'registerAlias':
            eventPane = (
                <span>
                    <span style={aStyle}>{props.data.oldAlias}</span> is now known as <span style={aStyle}>{props.data.newAlias}</span>.
                </span>
            );
            break;
        case 'disconnectUser':
            eventPane = (
                <span>
                    <span style={aStyle}>{props.data.alias}</span> has left the session.
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
