import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles, COLOR_DRAWER_ICON } from '../styles/common';

export default class DrawerContainer extends React.Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.drawer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('home')}
                    style={styles.drawerItem}
                >
                    <Icon size={24} color={COLOR_DRAWER_ICON} name="home" />
                    <Text style={styles.drawerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('stackoverflow')}
                    style={styles.drawerItem}
                >
                    <Icon size={24} color={COLOR_DRAWER_ICON} name="list" />
                    <Text style={styles.drawerText}>Stackoverflow</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('logout')}
                    style={styles.drawerItem}
                >
                    <Icon size={24} color={COLOR_DRAWER_ICON} name="power" />
                    <Text style={styles.drawerText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
