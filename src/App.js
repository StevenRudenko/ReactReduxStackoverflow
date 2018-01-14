import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './store/configureStore';
import ReduxNavigation from './navigation/ReduxNavigation';

import { styles } from './styles/common';

const store = createStore();
const App = function () {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <ReduxNavigation />
            </View>
        </Provider>
    );
};

export default App;
