import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Button, Modal, StyleSheet, Share } from 'react-native';
import { Card, Icon, Rating, Input, TextInput } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';
import { postComment } from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        favorites: state.favorites,
        ingredients: state.ingredients,
        instructions: state.instructions
    };
};

const mapDispatchToProps = {
    postFavorite: campsiteId => (postFavorite(campsiteId)),
    postComment: (campsiteId, rating, author) => (postComment(campsiteId, rating, author)),
};

function RenderCampsite(props) {

    const { campsite } = props;
    const shareCampsite = (title, message, url) => {
        Share.share({
            title: title,
            message: `${title}: ${message} ${url}`,
            url: url
        },{
            dialogTitle: 'Share ' + title
        });
    };

    if (campsite) {
        return (
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <Card
                    featuredTitle={campsite.name}
                    image={{ uri: baseUrl + campsite.image }}>
                    <Text style={{ margin: 10 }}>
                        {campsite.description}
                    </Text>
                    <View style={styles.cardRow}>
                        <MaterialCommunityIcons 
                            name={props.favorite ? 'bookmark-plus' : 'bookmark-plus-outline'} 
                            color='#595959' 
                            size={55}
                            onPress={() => props.favorite ?
                                console.log('Already set as a favorite') : props.markFavorite()}
                            />
                        <MaterialCommunityIcons 
                            name='star' 
                            color='#ffd700' 
                            size={55}
                            onPress={() => props.onShowModal()}
                            />
                        <MaterialCommunityIcons 
                            name='share' 
                            color='#595959'
                            size={55}
                            onPress={() => shareCampsite(campsite.name, campsite.description, baseUrl + campsite.image)} 

                            />
                    </View>
                </Card>
            </Animatable.View>
        );
    }
    return <View />;
}

function RenderIngredients({ ingredients }) {

    const renderIngredientItem = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.name}</Text>
                <Text style={{ paddingVertical: '5%', fontSize: 14 }}>{item.description}</Text>
            </View>
        );
    };

    return (
        <Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
            <Card title='Ingredients'>
                <FlatList
                    data={ingredients}
                    renderItem={renderIngredientItem}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        </Animatable.View>
    );
}

function RenderInstructions({ instructions }) {

    const renderInstructionItem = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.name}</Text>
                <Text style={{ paddingVertical: '5%', fontSize: 14 }}>{item.description}</Text>
            </View>
        );
    };

    return (
        <Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
            <Card title='Method'>
                <FlatList
                    data={instructions}
                    renderItem={renderInstructionItem}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        </Animatable.View>
    );
}

function RenderComments({ comments }) {

    const renderCommentItem = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <Rating
                    readonly
                    startingValue={item.rating}
                    imageSize={10}
                    style={{ paddingVertical: '5%', alignItems: 'flex-start' }}
                />
                <Text style={{ fontSize: 12 }}>{item.author}</Text>
            </View>
        );
    };

    return (
        <Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
            <Card title='Ratings'>
                <FlatList
                    data={comments}
                    renderItem={renderCommentItem}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        </Animatable.View>
    );
}

class CocktailInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            rating: 5,
            author: ''
            
        };
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    handleComment(campsiteId) {
        console.log(JSON.stringify(this.state));
        this.props.postComment(campsiteId, this.state.rating, this.state.author);
        this.toggleModal();
    }

    resetForm() {
        this.setState({
            showModal: false,
            rating: 5,
            author: '',
            
        });
    }

    markFavorite(campsiteId) {
        this.props.postFavorite(campsiteId);
    }

    static navigationOptions = {
        title: 'Cocktail Information'
    }

    render() {
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite = this.props.campsites.campsites.filter(campsite => campsite.id === campsiteId)[0];
        const comments = this.props.comments.comments.filter(comment => comment.campsiteId === campsiteId);
        const ingredients = this.props.ingredients.ingredients.filter(ingredient => ingredient.campsiteId === campsiteId);
        const instructions = this.props.instructions.instructions.filter(instruction => instruction.campsiteId === campsiteId);
        
        return (
            <ScrollView>
                <RenderCampsite campsite={campsite}
                    favorite={this.props.favorites.includes(campsiteId)}
                    markFavorite={() => this.markFavorite(campsiteId)}
                    onShowModal={() => this.toggleModal()}
                />
                <RenderIngredients ingredients={ingredients} />
                <RenderInstructions instructions={instructions} />
                <RenderComments comments={comments} />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Rating
                            
                            imageSize={40}
                            showRating
                            onFinishRating={rating => this.setState({ rating: rating })}
                            startingValue={this.state.rating}
                            style={{ paddingVertical: 10 }}
                        />

                        <Input
                            value={this.state.author}
                            leftIconContainerStyle={{ paddingRight: 10 }}
                            placeholder='Author'
                            onChangeText={author => this.setState({ author: author })}
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        />
                        <View style={{ margin: 10 }}>
                            <Button
                                onPress={() => {
                                    this.handleComment(campsiteId);
                                    this.resetForm();
                                }}
                                color='#5637DD'
                                title='Submit'
                            />
                        </View>
                        <View style={{ margin: 10 }}>
                            <Button
                                onPress={() => {
                                    this.toggleModal();
                                    this.resetForm();
                                }}
                                color='#808080'
                                title='Cancel'
                            />
                        </View>
                    </View>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(CocktailInfo);