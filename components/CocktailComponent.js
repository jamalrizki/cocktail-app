import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Tile, } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';



const mapStateToProps = state => {
    return {
        campsites: state.campsites
    };
};

class Cocktails extends Component {
    

    static navigationOptions = {
        title: 'Cocktails'
    }

    render() {
       
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({ item }) => {
            return (
                
                <Animatable.View animation='fadeInRightBig' duration={1000}>
                    <Tile
                        title={item.name}
                        titleStyle={{fontWeight: "bold", fontSize: 40}}
                        featured
                        caption="Click For Details"
                        onPress={() => navigate('CocktailInfo', { campsiteId: item.id })}
                        imageSrc={{ uri: baseUrl + item.image }}
                    />
                </Animatable.View>
            );
        };

        if (this.props.campsites.isLoading) {
            return <Loading />;
        }
        if (this.props.campsites.errMess) {
            return (
                <View>
                    <Text>{this.props.campsites.errMess}</Text>
                </View>
            );
        }

        return (
                <View>
                <FlatList
                    data={this.props.campsites.campsites}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
                </View>
        );
    }
}

export default connect(mapStateToProps)(Cocktails);