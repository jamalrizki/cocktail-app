import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        things: state.things
    };
};


class Things extends Component {

    static navigationOptions = {
        title: 'Tools and Techniques'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderToolsItem = ({ item }) => {
            return (
                <Animatable.View animation='fadeInRightBig' duration={1000}>
                    <ListItem
                            title={item.name}
                            subtitle={item.description}
                            leftAvatar={{source: {uri: baseUrl + item.image}}}
                            onPress={() => navigate('Details', {campsiteId: item.id})}
                        />
                </Animatable.View>
            );
        };

        if (this.props.things.isLoading) {
            return <Loading />;
        }
        if (this.props.things.errMess) {
            return (
                <View>
                    <Text>{this.props.things.errMess}</Text>
                </View>
            );
        }

        return (
            <FlatList
                data={this.props.things.things}
                renderItem={renderToolsItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Things);