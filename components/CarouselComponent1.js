import React, { Component } from 'react';
import { Text, View, SafeAreaView, Animated, Image } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import Carousel from 'react-native-snap-carousel';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        promotions: state.promotions,

    };
};

function RenderItem(props) {
    const { item } = props;

    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {

        return (
            <Tile
                title={item.name}
                caption={item.description}
                featured
                imageSrc={{ uri: baseUrl + item.image }}
            />
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scaleValue: new Animated.Value(0),
            activeIndex: 0,
        };
    }

    animate() {
        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
            }
        ).start();
    }

    componentDidMount() {
        this.animate();
    }

    static navigationOptions = {
        title: 'Home'
    }

    _renderItem({ item, index }) {
        return (

            <Card
                featuredTitle={item.name}
                image={{ uri: baseUrl + item.image }}>

                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>


        )
    }

    render() {
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const details = this.props.promotions.promotions.filter(detail => detail.campsiteid === campsiteId);

        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({ item }) => {
            return (
                <View animation='fadeInRightBig' duration={2000}>
                    <Card
                        featuredTitle={item.name}
                        image={{ uri: baseUrl + item.image }}
                        onPress={() => navigate('CocktailInfo', { campsiteId: item.id })}>
                        <Text style={{ margin: 10 }}>
                            {item.description}
                        </Text>
                    </Card>
                    
                </View>
            );
        };
        return (
            <Animated.ScrollView style={{ transform: [{ scale: this.state.scaleValue }] }}>
                <RenderItem
                    item={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
                    isLoading={this.props.campsites.isLoading}
                    errMess={this.props.campsites.errMess}
                />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2', paddingTop: 50, }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                        <Carousel
                            layout={"default"}
                            
                            data={details}
                            sliderWidth={300}
                            itemWidth={300}
                            renderItem={renderDirectoryItem}
                            onSnapToItem={index => this.setState({ activeIndex: index })} />
                    </View>
                </SafeAreaView>
            </Animated.ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);