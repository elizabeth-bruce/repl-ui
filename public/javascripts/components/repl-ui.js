import React, {Component} from 'react';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Row, Col} from 'react-flexbox-grid';

import UserBar from './user-bar';
import Terminal from './terminal';
import TerminalInput from './terminal-input';
import LeftBar from './left-bar';

import * as popsicle from 'popsicle';

import {connect} from 'react-redux';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const divWrapperStyle = {
    display: 'flex',
    height: '100%',
    flexDirection: 'column'
};

const divStyle = {
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
};

const rowStyle = {
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    overflow: 'hidden'
};

class ReplUI extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={divWrapperStyle}>
                    <UserBar activeUsers={this.props.activeUsers} />
                    <div style={divStyle}>
                        <Row start="xs" style={rowStyle}>
                            <Col md={2} xs={12} start="xs">
                                <LeftBar
                                    activeUsers={this.props.activeUsers}
                                    assignAlias={this.props.assignAlias}
                                />
                            </Col>
                            <Col md={4} xs={12} start="xs">
                                <TerminalInput sendCode={this.props.sendCode} />
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
