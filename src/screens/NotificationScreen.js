import React  from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 

class NotificationScreen extends React.Component {
    static navigationOptions = {
        title: 'Notification',  // modifies header
      };
    
    render(){
        return(
            <ImageBackground source={ require('../../images/galaxy-bg.jpg')} style= { {width: '100%', height: '100%', flex: 1, resizeMode: 'cover' }}>
        
            <View 
            style={{ 
              flex: 1, 
              alignItems: 'center', 
              justifyContent: 'center' 
              }}>
      
              <Text style={styles.bigWhite}> Notifications </Text>
              {/* <Image
              source={require('../../images/logo.png')}
              style={{ width: 100, height: 100 }}
              /> */}
              
             
            </View>
      </ImageBackground>
        )
    }
}


 
const styles = StyleSheet.create({
    bigWhite: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
    },
  })


export {NotificationScreen}
