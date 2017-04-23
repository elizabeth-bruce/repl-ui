import React, {Component} from 'react';
import TerminalEvent from './terminal-event';
import TerminalHeader from './terminal-header';

const style = {
    background: '#000000',
    color: '#ffffff',
    marginTop: 50,
    padding: 10,
    fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
    fontSize: 14,
    textAlign: 'left',
    height: 600,
    overflowY: 'auto'
};

const color = {
    color: '#2E830F'
};


function Terminal(props) {
    const events = props.eventLog.map((evt) => 
        <TerminalEvent 
            type={evt.type}
            data={evt.data}
        />
    );

    return (
        <div style={style}>
            <TerminalHeader activeUsers={props.activeUsers} />
            {events}
        </div>
    );
};

export default Terminal;
