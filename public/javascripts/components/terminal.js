import React, {Component} from 'react';
import TerminalEvent from './terminal-event';
import TerminalHeader from './terminal-header';

const wrapperStyle = {
    boxSizing: 'border-box',
    height: '100%',
    display: 'block',
    flex: 'none',
    flexDirection: 'column',
    background: '#000000',
    overflowY: 'hidden'
};

const style = {
    background: '#000000',
    color: '#ffffff',
    borderLeft: '1px solid #ffffff',
    padding: 10,
    fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
    fontSize: 14,
    textAlign: 'left',
    overflowY: 'auto',
    overflowX: 'hidden',
    display: 'block',
    height: '100%',
    flex: '0 0 auto',
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
        <div style={wrapperStyle}>
            <div style={style}>
                <TerminalHeader activeUsers={props.activeUsers} />
                {events}
            </div>
        </div>
    );
};

export default Terminal;
