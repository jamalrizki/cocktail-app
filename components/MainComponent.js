import React, { Component } from 'react';
import Home from './CarouselComponent'

import Cocktails from './CocktailComponent';
import CocktailInfo from './CocktailInfoComponent';
import Favorites from './FavoritesComponent';
import Things from './ThingsComponent';
import Details from './DetailsComponent';
import { View, Platform, StyleSheet  } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import {
    fetchCampsites, fetchComments, 
    fetchIngredients, fetchInstructions, fetchThings, fetchDetails, fetchPopulars, 
} from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchCampsites,
    fetchComments,
    fetchIngredients,
    fetchInstructions,
    fetchThings,
    fetchDetails,
    fetchPopulars,
   

};

const CocktailNavigator = createStackNavigator(
    {
        Cocktails: {
            screen: Cocktails,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <MaterialCommunityIcons name="glass-cocktail" color='#f2f2f2' size={26} />
            })
        },
        CocktailInfo: { screen: CocktailInfo }
    },
    {
        initialRouteName: 'Cocktails',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0D0D0D'
            },
            headerTintColor: '#f2f2f2',
            headerTitleStyle: {
                color: '#f2f2f2'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <MaterialCommunityIcons name="home" color='#f2f2f2' size={26} />
            })
        },
        CocktailInfo: { screen: CocktailInfo },
        Details: { screen: Cocktails }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0D0D0D'
            },
            headerTintColor: '#f2f2f2',
            headerTitleStyle: {
                color: '#f2f2f2'
            }
        }
    }
);


const ThingsNavigator = createStackNavigator(
    {
        Things: {
            screen: Things,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <MaterialCommunityIcons name="glass-wine" color='#f2f2f2' size={26} />
            })
        },
        Details: { screen: Details }
    },
    {
        initialRouteName: 'Things',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0D0D0D'
            },
            headerTintColor: '#f2f2f2',
            headerTitleStyle: {
                color: '#f2f2f2'
            }
        }
    }
);

const FavoritesNavigator = createStackNavigator(
    {
        Favorites: { screen: Favorites }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#0D0D0D'
            },
            headerTintColor: '#f2f2f2',
            headerTitleStyle: {
                color: '#f2f2f2'
            },
            headerLeft: <MaterialCommunityIcons name="content-save-outline" color='#f2f2f2' size={26} />
        })
    }
);



const Tabbar1 = createMaterialBottomTabNavigator(
    {
      Home: { screen: HomeNavigator, navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <MaterialCommunityIcons name="home" color={tintColor} size={26} />
        )
    }},
      Cocktails: { screen: CocktailNavigator, navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <MaterialCommunityIcons name="glass-cocktail" color={tintColor} size={26} />
        )
    }},
    Things: { screen: ThingsNavigator, navigationOptions: {
        tabBarLabel: 'Tools',
        tabBarIcon: ({tintColor}) => (
            <MaterialCommunityIcons name="glass-wine" color={tintColor} size={26} />
        )
    }},
    Favorites: { screen: FavoritesNavigator, navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <MaterialCommunityIcons name="content-save-outline" color={tintColor} size={26} />
        )
    }},
      
    },
    {
      initialRouteName: 'Home',
      activeColor: '#f2f2f2',
      inactiveColor: '#D9D8D7',
      barStyle: { backgroundColor: '#0D0D0D' },
    }
  );

const AppNavigator = createAppContainer(Tabbar1);

class Main extends Component {

    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchIngredients();
        this.props.fetchInstructions();
        this.props.fetchThings();
        this.props.fetchDetails();
        this.props.fetchPopulars();
        

    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}>
                <AppNavigator />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#f2f2f2',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#f2f2f2',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 50,
        width: 50
    },
    stackIcon: {
        marginLeft: 10,
        color: '#f2f2f2',
        fontSize: 24
    }
});


export default connect(null, mapDispatchToProps)(Main);