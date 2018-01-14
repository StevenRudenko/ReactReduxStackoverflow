import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { styles } from '../styles/common';

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.messageContainer}>
                <Text style={styles.messageText}>
                    {`Hello, ${this.props.username}!`}
                </Text>
            </View>
        );
    }

}

function mapStateToProps({ auth }) {
    return {
        username: auth.username
    };
}

export default connect(mapStateToProps)(HomeScreen);
