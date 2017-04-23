import React, {Component} from 'react';

class AliasForm extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const style = {
            background: {
                minHeight: 49,
                background: '#000000',
                color: '#ffffff',
                padding: 10,
                borderTop: '1px solid #ffffff',
                overflow: 'hidden',
                position: 'relative'
            },
            input: {
                background: '#000000',
                color: '#ffffff',
                border: '0 none',
                fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
                fontSize: 16,
                top: '10%',
                height: '80%',
                float: 'left',
                width: '65%',
                overflow: 'hidden',
                position: 'absolute'
            },
            button: {
                border: '1px solid #ffffff',
                background: '#000000',
                color: '#ffffff',
                fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
                fontSize: 14,
                paddingTop: 10,
                paddingBottom: 10,
                float: 'right',
                top: '25%',
                height: '50%',
                width: '25%',
                whiteSpace: 'nowrap'
            }
        };

        return (
            <div style={style.background}>
                <input type="text" maxLength={16} style={style.input} />
                <button style={style.button}>
                    Select Alias
                </button>
            </div>
        );
    }
};

export default AliasForm;
