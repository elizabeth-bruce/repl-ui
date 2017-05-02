import React, {Component} from 'react';
import ActiveUsersList from './active-users-list';
import AliasForm from './alias-form';

function LeftBar(props) {
    const wrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        background: '#000000',
        height: '100%'
    };

    return (
        <div style={wrapperStyle}>
            <ActiveUsersList activeUsers={props.activeUsers} />
            <AliasForm assignAlias={props.assignAlias} />
        </div>
    );
};

export default LeftBar;
