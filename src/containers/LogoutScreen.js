import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { styles } from '../styles/common';

import { logout } from '../actions/AuthActions';

class LogoutScreen extends Component {

    performLogout() {
        this.props.logout();
        // This will reset back to loginStack
        // https://github.com/react-community/react-navigation/issues/1127
        const actionToDispatch = NavigationActions.reset({
            index: 0,
            key: null,  // black magic
            actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
        });
        this.props.navigation.dispatch(actionToDispatch);
    }

    render() {
        return (
            <View style={styles.messageContainer}>
                <Text style={styles.messageText}>
                    Good Bye
                </Text>
                <Button
                    style={styles.actionButton}
                    title="Log Out"
                    onPress={() => this.performLogout()}
                />
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logout }, dispatch);
}

export default connect(null, mapDispatchToProps)(LogoutScreen);
