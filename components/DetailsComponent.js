import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Button, Modal, StyleSheet } from 'react-native';
import { Card, Icon, Rating, Input, TextInput } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        favorites: state.favorites,
        ingredients: state.ingredients,
        instructions: state.instructions,
        things: state.things,
        details: state.details
    };
};

function RenderThing(props) {

    const { thing } = props;

    if (thing) {
        return (
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <Card
                    featuredTitle={thing.name}
                    image={{ uri: baseUrl + thing.image }}>
                    <Text style={{ margin: 10 }}>
                        {thing.description}
                    </Text>
                </Card>
            </Animatable.View>
        );
    }
    return <View />;
}


function RenderDetails({ details }) {

    const renderDetailsItem = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.name}</Text>
                <Text style={{ paddingVertical: '5%', fontSize: 14 }}>{item.description}</Text>
            </View>
        );
    };

    return (
        <Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
            <Card title='Info'>
                <FlatList
                    data={details}
                    renderItem={renderDetailsItem}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        </Animatable.View>
    );
}



class Details extends Component {


    static navigationOptions = {
        title: 'Tools and Techniques'
    }

    render() {
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const thing = this.props.things.things.filter(thing => thing.id === campsiteId)[0];
        const details = this.props.details.details.filter(detail => detail.campsiteId === campsiteId);
        return (
            <ScrollView>
                <RenderThing thing={thing}
                />
                <RenderDetails details={details} />
                
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
});

export default connect(mapStateToProps)(Details);