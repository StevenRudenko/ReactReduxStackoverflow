import React from 'react';
import { Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import { styles, COLOR_PRIMARY, COLOR_HEADER_TEXT } from '../styles/common';

import DrawerContainer from '../containers/DrawerContainer';
import LoginScreen from '../containers/LoginScreen';
import HomeScreen from '../containers/HomeScreen';
import StackoverflowScreen from '../containers/StackoverflowScreen';
import LogoutScreen from '../containers/LogoutScreen';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
    transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
    }
});

const drawerButton = (navigation) => (
    <Icon
        name="menu" size={24} color={COLOR_HEADER_TEXT}
        style={styles.toolbarIcon}
        onPress={() => {
            // Coming soon: navigation.navigate('DrawerToggle')
            // https://github.com/react-community/react-navigation/pull/2492
            if (navigation.state.index === 0) {
                navigation.navigate('DrawerOpen');
            } else {
                navigation.navigate('DrawerClose');
            }
        }}
    />
);

const MainStack = DrawerNavigator(
    {
        home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Home'
            }
        },
        stackoverflow: {
            screen: StackoverflowScreen,
            navigationOptions: {
                title: 'Stackoverflow'
            }
        },
        logout: {
            screen: LogoutScreen,
            navigationOptions: {
                title: 'Logout'
            }
        },
    }, {
        gesturesEnabled: false,
        contentComponent: DrawerContainer
    }
);

const MainNavigation = StackNavigator(
    {
        mainStack: { screen: MainStack }
    },
    {
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: COLOR_PRIMARY
            },
            headerTintColor: COLOR_HEADER_TEXT,
            gesturesEnabled: false,
            headerLeft: drawerButton(navigation)
        })
    }
);

const LoginStack = StackNavigator(
    {
        loginScreen: { screen: LoginScreen }
    }, {
        headerMode: 'none',
        navigationOptions: () => ({
            gesturesEnabled: false
        })
    }
);

const RootNavigation = StackNavigator(
    {
        loginStack: { screen: LoginStack },
        mainStack: { screen: MainNavigation }
    }, {
        // Default config for all screens
        headerMode: 'none',
        initialRouteName: 'loginStack',
        transitionConfig: noTransitionConfig
    }
);

export default RootNavigation;
