import React, {Component} from 'react';

const wrapperStyle = {
    flex: '1 1 auto',
    background: '#000000',
    color: '#ffffff',
    border: '0 none',
    fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
    fontSize: 16,
    boxSizing: 'border-box',
    padding: 10,
    height: '100%'    
};

function userStyle(user) {
    return {
        color: user.color,
    };
};

function ActiveUsersList(props) {
    const activeUsers = props.activeUsers.activeUsers.map((user) =>
        <div style={userStyle(user)}>{user.alias}</div>
    );

    return (
        <div style={wrapperStyle}>
            <div>Active Users</div>
            <br/>
            {activeUsers}
        </div>
    );
};

export default ActiveUsersList;
