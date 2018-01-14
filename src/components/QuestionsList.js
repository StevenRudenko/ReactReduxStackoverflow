import React, { Component } from 'react';
import { TouchableHighlight, Text, View, FlatList } from 'react-native';

import { styles } from '../styles/common';

export default class QuestionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }    

    renderItem(row) {
        const title = row.item.title;
        return (
            <TouchableHighlight underlayColor={'rgba(0, 0, 0, 0.054)'}>
                <View style={styles.listItem}>
                    <Text style={styles.text} ellipsizeMode='tail' numberOfLines={2}>{title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <FlatList
                keyExtractor={(question) => question.question_id}
                data={this.props.questions}
                renderItem={(row) => this.renderItem(row)}
                onEndReachedThreshold={0.75}
                onEndReached={() => this.props.onLoadMore()}
                {...this.props}
            />
        );
    }
}
