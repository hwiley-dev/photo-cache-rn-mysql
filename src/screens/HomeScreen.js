import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation'; 
import { View, Text, ImageBackground, Button, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GeoTest from '../../GeoTest'
import Header from '../components/common'

// import axios from 'axios';


/* 
HomeScreen is scrollable feed.

To Dos
[] Add Scrollview
[] Pass userlocation to feed
[] Display
[]
[]
*/
class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
  };
    render() {
      return (
    <ImageBackground source={ require('../../images/earth.png')} style= { {width: '100%', height: '100%', flex: 1, resizeMode: 'cover', backgroundColor: 'black', padding: 20 }}>
        <View style={{alignItems: 'flex-end', justifyContent: 'flex-start', paddingTop: 10,  }}>
   <GeoTest />
          <Icon name={'cogs'} size={30} color={'#e60000'} onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Settings' })
                ],
              }))
            }}
            />
        </View>
      <ScrollView>
        <View  
        style={{ 
          flex: 1, 
          alignItems: 'center', 
          backgroundColor: 'rgba(102, 255, 255, 0.7 )',
          borderRadius: 15,
          justifyContent: 'center',
          padding: 20
          }}>
          <Text style={styles.bigWhite}> Photo Cache </Text>
          
   

{/*  Users Feed Content Goes Here */}

      
      
       
       
        
  
    </View>
    </ScrollView>

  </ImageBackground>
      );
    }  
  }
  
  const styles = StyleSheet.create({
    bigWhite: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
    },
    BtnRow:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10

    }
  })

  export { HomeScreen }