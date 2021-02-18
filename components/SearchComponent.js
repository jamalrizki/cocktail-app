import React, { Component } from 'react';
import { View, Text, Image, Platform, StatusBar } from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { SwipeRow } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteFavorite } from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
  return {
    campsites: state.campsites
  };
};


class Search extends Component {

  static navigationOptions = {
    title: 'Search'
}

  render() {
    const { navigate } = this.props.navigation;
    const cell = ({ item }) => {
      return (
        
        <ListItem
            title={item.name}
            subtitle={item.description}
            leftAvatar={{source: {uri: baseUrl + item.image}}}
              onPress={() => navigate('CocktailInfo', {campsiteId: item.id})}
          />
      );
    };

    

      const { navigation } = this.props;
      return (
        <CompleteFlatList
          searchKey={['name']}
          highlightColor='grey'
          data={this.props.campsites.campsites}
          renderSeparator={null}
          renderItem={cell}
          onEndReachedThreshold={0}
        />

      );
    
  }
}
export default connect(mapStateToProps)(Search);