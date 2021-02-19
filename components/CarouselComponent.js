import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Carousel from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';



const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        populars: state.populars,
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

function Heading({ nav }) {
    return (
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


function RenderDetails({ details, nav }) {


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


    static navigationOptions = {
        title: 'Home'
    }



    render() {
        const { navigate } = this.props.navigation;
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const details = this.props.populars.populars.filter(detail => detail.campsiteid === campsiteId);


        return (
            <ScrollView  >
                <Logo />
                <Heading nav={navigate} />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2', paddingTop: 50, }}>
                    <RenderDetails details={details}
                        nav={navigate}
                    />
                </SafeAreaView>
            </ScrollView>
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