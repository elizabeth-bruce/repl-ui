import React, {Component} from 'react';

class AliasForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.assignAlias = this.assignAlias.bind(this);
    }

    assignAlias() {
        console.log(document.getElementById('aliasForm').value);
        this.props.assignAlias(document.getElementById('aliasForm').value);
    }

    render() {
        const style = {
            background: {
                background: '#000000',
                color: '#ffffff',
                borderTop: '1px solid #ffffff',
                padding: 10,
                flex: '0 1 auto'
            },
            input: {
                background: '#000000',
                color: '#ffffff',
                border: '1px solid #ffffff',
                fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
                fontSize: 16,
                float: 'left',
                width: '100%',
                overflow: 'hidden'
            },
            button: {
                border: '1px solid #ffffff',
                background: '#000000',
                color: '#ffffff',
                fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
                fontSize: 14,
                paddingTop: 10,
                paddingBottom: 10,
                width: '100%',
                whiteSpace: 'nowrap'
            }
        };

        return (
            <div style={style.background}>
                <input id="aliasForm" type="text" placeholder="Alias" maxLength={16} style={style.input} />
                <button style={style.button} onClick={this.assignAlias}>
                    Select Alias
                </button>
            </div>
        );
    }
};

export default AliasForm;
