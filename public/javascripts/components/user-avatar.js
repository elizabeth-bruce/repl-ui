import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';

class UserAvatar extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const style = {
//            display: 'inline-block',
            marginLeft: '5px',
            marginRight: '5px'
        };

        return (
            <Avatar backgroundColor={'#2E830F'} style={style}>
                K
            </Avatar>
        );
    }
}

export default UserAvatar;
