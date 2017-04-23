import React, {Component} from 'react';

class TerminalInput extends Component {
    constructor(props, context) {
        super(props, context);

        this.sendCode = this.sendCode.bind(this);
    }

    sendCode() {
        this.props.sendCode(document.getElementById('codeInput').value);
    }

    render() {
        const style = {
            background: {
                background: '#000000',
                color: '#ffffff',
                marginTop: 50,
                padding: 10,
                minHeight: 530,
                overflow: 'hidden',
            },
            textarea: {
                background: '#000000',
                color: '#ffffff',
                fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
                fontSize: 14,
                textAlign: 'left',
                width: '100%',
                border: 'none',
                resize: 'none'
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
            }
       };

        return (
            <div style={style.background}>
                <textarea id="codeInput" rows="26" wrap="soft" name="command" style={style.textarea}>

                </textarea>
                <button style={style.button} onClick={this.sendCode}>
                    Run Command
                </button>
            </div>
        );

    }
}

export default TerminalInput;
