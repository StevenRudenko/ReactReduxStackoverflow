import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import { styles } from '../styles/common';

const MIN_USERNAME_LENGTH = 4;
const MIN_PASSWORD_LENGTH = 6;

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.usernameRef = this.updateRef.bind(this, 'username');
        this.passwordRef = this.updateRef.bind(this, 'password');

        this.state = {
            username: '',
            password: '',
            errors: {}
        };
    }

    onSubmit() {
        const errors = {};
        ['username', 'password'].forEach((name) => {
            const value = this[name].value();
            if (!value) {
                errors[name] = 'Should not be empty';
            } else if (name === 'username' && value.length < MIN_USERNAME_LENGTH) {
                errors[name] = 'Too short';
            } else if (name === 'password' && value.length < MIN_PASSWORD_LENGTH) {
                errors[name] = 'Too short';
            } else {
                this.props.performLogin(this.state.username, this.state.password);
            }
        });
        this.setState({ errors });
    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    render() {
        const errors = this.state.errors;
        return (
            <View>
                <TextField
                    ref={this.usernameRef}
                    value={this.state.username}
                    autoCapitalize='none'
                    autoCorrect={false}
                    enablesReturnKeyAutomatically
                    returnKeyType='next'
                    label={'Username'}
                    error={errors.username}
                    onChangeText={(username) => this.setState({ username })}
                />
                <TextField
                    ref={this.passwordRef}
                    value={this.state.password}
                    secureTextEntry
                    autoCapitalize='none'
                    autoCorrect={false}
                    enablesReturnKeyAutomatically
                    returnKeyType='done'
                    label='Password'
                    error={errors.password}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    style={styles.actionButton}
                    title="Log In"
                    onPress={() => this.onSubmit()}
                />
            </View>
        );
    }
}
