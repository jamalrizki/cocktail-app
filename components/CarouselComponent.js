import React, { Component } from 'react';
import { Text, View, SafeAreaView, Animated, StyleSheet, Button  } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import Carousel from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        promotions: state.promotions,

    };
};
function Logo() {
    return (
        <Tile 
        imageSrc={require('./images/Zest.png')}
        featured
        />
    );
}

function Heading({nav}) {
    return(
        <View style={styles.View}>
                <Text style={styles.HeaderText}>
                    Popular Cocktails</Text>
                <Button title="See All >" 
                onPress={() => nav('Details')} 
                style={styles.ButtonText} 
                color="#595959" />        
        </View>
    );
}
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

function RenderDetails({ details, nav }) {
console.log({nav})
    const renderDetailsItem = ({ item }) => {
        
        return (
            <TouchableOpacity onPress={() => nav('CocktailInfo', { campsiteId: item.id })}>
            <Card
                featuredTitle={item.name}
                image={{ uri: baseUrl + item.image }}
                
                
                >

                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
            
            <Carousel
                layout={"default"}
                data={details}
                sliderWidth={300}
                itemWidth={300}
                renderItem={renderDetailsItem}
                 />
        </View>



    );
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



    render() {
        const { navigate } = this.props.navigation;
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const details = this.props.promotions.promotions.filter(detail => detail.campsiteid === campsiteId);
        return (

            <Animated.ScrollView style={{ transform: [{ scale: this.state.scaleValue }] }}>
    
                <Logo />
                <Heading nav={navigate} />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2', paddingTop: 50, }}>
                    <RenderDetails details={details}
                    nav={navigate} 
                    
                    />
                </SafeAreaView>
            </Animated.ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    
    HeaderText: {
        color: '#595959',
        fontSize: 18,
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        fontWeight: "bold"
    },
    ButtonText: {
        color: '#0D0D0D',
        fontSize: 16,
        flex: 1,
        flexDirection: 'row',
       
    },
    View: {
        backgroundColor: '#f2f2f2',
        flex: 1, 
        flexDirection: 'row',
        padding: 6,
        paddingTop: 20,
    },

});

export default connect(mapStateToProps)(Home);