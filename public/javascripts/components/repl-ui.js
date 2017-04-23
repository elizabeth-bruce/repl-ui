import React, {Component} from 'react';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Row, Col} from 'react-flexbox-grid';

import UserBar from './user-bar';
import Terminal from './terminal';
import TerminalInput from './terminal-input';
import AliasForm from './alias-form';

import * as popsicle from 'popsicle';

import {connect} from 'react-redux';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class ReplUI extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <UserBar activeUsers={this.props.activeUsers} />
                    <div>
                        <Row start="xs">
                            <Col md={4} xs={12} mdOffset={1} start="xs">
                                <TerminalInput sendCode={this.props.sendCode} />
                                <AliasForm/>
                            </Col>
                            <Col md={6} xs={12} start="xs">
                                <Terminal
                                    eventLog={this.props.eventLog}
                                    activeUsers={this.props.activeUsers}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ReplUI);
