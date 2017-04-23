import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import UserAvatar from './user-avatar';

class UserBar extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const style = {
            background: {
                width: '100%',
                minHeight: 60,
                backgroundColor: '#8AD76E',
                paddingTop: 10
            },
            userAvatarGroup: {
                textAlign: 'center'
            }
       };

        return (
            <div className="user-bar-background">
                <Paper style={style.background} rounded={false} zDepth={2}>
                    <div className="user-avatar-group" style={style.userAvatarGroup}>
                        <UserAvatar />
                    </div>
                </Paper>
            </div>
        );
    }
}

export default UserBar;
