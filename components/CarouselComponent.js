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

////////Names////////
function Heading({ nav }) {
    return (
        <View style={styles.View}>
            <Text style={styles.HeaderText}>
                Popular Cocktails
            </Text>
            <Button title="See All >"
                onPress={() => nav('Details')}
                style={styles.ButtonText}
                color="#595959"
             />
        </View>
    );
}

function GinPic() {
    return (
        <Tile
            imageSrc={require('./images/Gin.png')}
            featured
        />
    );
}
function GinDir({ nav }) {
    return (
        <View style={styles.View}>
            <Text style={styles.HeaderText}>
                Gin Drinks
            </Text>
        </View>
    );
}


function WhiskeyPic() {
    return (
        <Tile
            imageSrc={require('./images/Whiskey.png')}
            featured
        />
    );
}
function WhiskeyDir({ nav }) {
    return (
        <View style={styles.View}>
            <Text style={styles.HeaderText}>
                Whiskey Drinks
            </Text>
        </View>
    );
}


function VodkaDir({ nav }) {
    return (
        <View style={styles.View}>
            <Text style={styles.HeaderText}>
                Vodka Drinks
            </Text>
        </View>
    );
}
function VodkaPic() {
    return (
        <Tile
            imageSrc={require('./images/Vodka.png')}
            featured
        />
    );
}


function RumDir({ nav }) {
    return (
        <View style={styles.View}>
            <Text style={styles.HeaderText}>
                Rum Drinks
            </Text>
        </View>
    );
}
function RumPic() {
    return (
        <Tile
            imageSrc={require('./images/Rum.png')}
            featured
        />
    );
}


function TequilaDir({ nav }) {
    return (
        <View style={styles.View}>
            <Text style={styles.HeaderText}>
                Tequila Drinks
            </Text>
        </View>
    );
}
function TequilaPic() {
    return (
        <Tile
            imageSrc={require('./images/Tequila.png')}
            featured
        />
    );
}
////////Names////////

////////Cards////////
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

function RenderTequila({ tequila, nav }) {

    const renderTequilaItem = ({ item }) => {

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
               data={tequila}
               sliderWidth={300}
               itemWidth={300}
               renderItem={renderTequilaItem}
           />
       </View>
   );
}

function RenderGin({ gin, nav }) {

    const renderGinItem = ({ item }) => {

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
               data={gin}
               sliderWidth={300}
               itemWidth={300}
               renderItem={renderGinItem}
           />
       </View>
   );
}

function RenderVodka({ vodka, nav }) {

    const renderVodkaItem = ({ item }) => {

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
               data={vodka}
               sliderWidth={300}
               itemWidth={300}
               renderItem={renderVodkaItem}
           />
       </View>
   );
}

function RenderRum({ rum, nav }) {

    const renderRumItem = ({ item }) => {

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
               data={rum}
               sliderWidth={300}
               itemWidth={300}
               renderItem={renderRumItem}
           />
       </View>
   );
}

function RenderWhiskey({ whiskey, nav }) {

    const renderWhiskeyItem = ({ item }) => {

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
               data={whiskey}
               sliderWidth={300}
               itemWidth={300}
               renderItem={renderWhiskeyItem}
           />
       </View>
   );
}
////////Cards////////



class Home extends Component {


    static navigationOptions = {
        title: 'Home'
    }


    render() {
        const { navigate } = this.props.navigation;
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const details = this.props.populars.populars.filter(detail => detail.campsiteid === campsiteId);
        const gin = this.props.campsites.campsites.filter(drinks => drinks.gin);
        const whiskey = this.props.campsites.campsites.filter(drinks => drinks.whiskey);
        const rum = this.props.campsites.campsites.filter(drinks => drinks.rum);
        const vodka = this.props.campsites.campsites.filter(drinks => drinks.vodka);
        const tequila = this.props.campsites.campsites.filter(drinks => drinks.tequila);
        return (
            <ScrollView  >
                <Logo />
                <Heading nav={navigate} />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2', paddingTop: 50, }}>
                    <RenderDetails details={details}
                        nav={navigate}
                    />
                    <RumPic />
                    <RumDir />
                    <RenderRum rum= {rum}
                    nav={navigate}
                    />
                    <GinPic />
                    <GinDir />
                    <RenderGin gin= {gin}
                    nav={navigate}
                    />
                    <WhiskeyPic />
                    <WhiskeyDir />
                    <RenderWhiskey whiskey= {whiskey}
                    nav={navigate}
                    />
                    <VodkaPic />
                    <VodkaDir />
                    <RenderVodka vodka= {vodka}
                    nav={navigate}
                    />
                    <TequilaPic />
                    <TequilaDir />
                    <RenderTequila tequila= {tequila}
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