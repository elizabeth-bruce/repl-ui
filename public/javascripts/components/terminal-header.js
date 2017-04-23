import React, { Component } from 'react';

function TerminalHeader(props) {
    return (
        <div>
            shareno.de <br/>
            Currently running node v6.7.0 <br/>
            > { props.activeUsers.activeUsers.length } currently online
        </div>
    );

};

export default TerminalHeader;
