
import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 

import { View, Button, Text, ImageBackground, StyleSheet } from 'react-native';
  

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
  };
  
  /* 
To Do's:
[] GET user location
[] pass location city to googleMap API lat/long start coords
[] Display Map (relative coords)
[] Display user location
[] Display public Caches
[] Display cache clues
[] Set source of ImageBackground to prop from geolocation GET request

*/
    render() {
      return (
        <ImageBackground source={ require('../../images/galaxy-bg2.jpg')} style= { {width: '100%', height: '100%', flex: 1, resizeMode: 'cover' }}>
        
        <View 
        style={{ 
          flex: 1, 
          alignItems: 'center', 
          justifyContent: 'center' 
          }}>
  
          <Text style={styles.bigWhite}> Photo Cache</Text>
          {/* <Image
          source={require('../../images/logo.png')}
          style={{ width: 100, height: 100 }}
          /> */}
          <Button
            title="Search User / Location"
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Stash' })
                ],
              }))
            }}
            />
          <Button
            title="Some Action"
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Signup' })
                ],
              }))
            }}
            />
        </View>
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
  })

  export {SearchScreen};