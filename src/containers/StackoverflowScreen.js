import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Snackbar from 'react-native-snackbar';
import QuestionsList from '../components/QuestionsList';

import { styles, COLOR_HEADER_TEXT } from '../styles/common';

import { fetchQuetions } from '../actions/StackoverflowActions';

const DEFAULT_SEARCH_TERM = 'React Native';

class StackoverflowScreen extends Component {

    state = {
        term: DEFAULT_SEARCH_TERM,
        loading: false
    }

    componentDidMount() {
        this.refresh();
    }

    componentWillUnmount() {
        Snackbar.dismiss();
    }

    loadMore() {
        if (!this.props.loading) {
            this.props.fetchQuetions(this.state.term, this.props.page + 1);
        }
    }

    refresh() {
        if (!this.props.loading) {
            this.props.fetchQuetions(this.state.term);
        }
    }

    render() {
        if (this.props.error) {
            Snackbar.show({
                title: this.props.error,
                duration: Snackbar.LENGTH_INDEFINITE,
                action: {
                    color: COLOR_HEADER_TEXT,
                    title: 'Refresh',
                    onPress: () => { this.refresh(); },
                },
            });
        }
        return (
            <View style={styles.container}>
                <QuestionsList
                    questions={this.props.questions}
                    refreshing={this.props.loading} 
                    onRefresh={() => this.refresh()}
                    onLoadMore={() => this.loadMore()}
                />
            </View>
        );
    }
}

function mapStateToProps({ stackoverflow }) {
    return {
        ...stackoverflow
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchQuetions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StackoverflowScreen);
