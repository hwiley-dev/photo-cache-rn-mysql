import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';


class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

    render() {
      return (
        <ImageBackground source={ require('../../images/galaxy-bg.jpg')} style= { {width: '100%', height: '100%', flex: 1, resizeMode: 'cover'}}>
        
        <View 
        style={{ 
          flex: 1, 
          alignItems: 'center', 
          justifyContent: 'center'
           
          }}>
  
          <Text style={styles.bigWhite}> Profile </Text>
          {/* <Image
          source={require('../../images/logo.png')}
          style={{ width: 100, height: 100 }}
          /> */}
          
          <Icon.Button name='cogs'
            title="Settings"
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
            title=" Login"
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Login' })
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

export { ProfileScreen } 