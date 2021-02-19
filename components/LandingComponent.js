import React from "react";
import {
  StyleSheet,
  ActivityIndicator, 
  Text,
  View,
  Button,
  Image,
  ProgressViewIOS
} from "react-native";
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
    };
};

class Landing extends React.Component {
    
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>AlligatorChef</Text>
          <Text style={styles.h2}>
            Providing cajun bacon recipes since 1987.
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={require('./images/florfinal2.png')} style={styles.image} />
        </View>
        <ProgressViewIOS number={1} />
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="LET'S START"
              style={styles.button}
              color="#fff"
            />
            <ActivityIndicator size='large' color='#A6A6A6' />
            <Text style={styles.loadingText}>Loading . . .</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#000',
      alignItems: 'center',
      width: '100%',
    },
    h1: {
      color: '#008F68',
      fontSize: 40,
    },
    h2: {
      color: '#FAE042',
      fontSize: 18,
      marginTop: 8,
    },
    image: {
        width: 300,
        height: 260,
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
    },
    topContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      middleContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      bottomContainer: {
        justifyContent: 'flex-end',
        width: '90%',
        margin: 20,
        padding: 10,
      },
      loadingText: {
        color: '#0D0D0D',
        fontSize: 14,
        fontWeight: 'bold'
    }
  });

  export default connect(mapStateToProps)(Landing);