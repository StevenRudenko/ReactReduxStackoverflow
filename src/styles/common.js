import { StyleSheet } from 'react-native';

export const COLOR_PRIMARY = '#3E50B4';
export const COLOR_HEADER_TEXT = '#FFF';
export const COLOR_DRAWER_ICON = '#000000';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    text: {
        fontSize: 16,
    },

    actionButton: {
        marginVertical: 16 
    },

    messageContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 32
    },

    messageText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    drawer: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        paddingTop: 48,
        paddingHorizontal: 16
    },

    drawerItem: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center'
    },

    drawerText: {
        fontSize: 16,
        marginHorizontal: 16
    },

    toolbarIcon: {
        marginHorizontal: 16
    },

    listItem: {
        height: 48,
        paddingHorizontal: 16,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.054)',
    },

});
