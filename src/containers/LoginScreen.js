import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import LoginForm from '../components/LoginForm';

import { styles } from '../styles/common';

import { login } from '../actions/AuthActions';

class LoginScreen extends Component {

    performLogin(username, password) {
        this.props.login(username, password);
        this.props.navigation.navigate('mainStack');
    }

    render() {
        return (
            <View style={styles.messageContainer}>
                <Text style={styles.messageText}>
                    Welcome!
                </Text>
                <LoginForm
                    performLogin={(username, password) => this.performLogin(username, password)}
                />
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginScreen);
