
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';


class StashScreen extends React.Component {
    static navigationOptions = {
        title: 'Stash',
      };
    
    render(){
        return(
            <ImageBackground source={ require('../../images/galaxy-bg2.jpg')} style= { {width: '100%', height: '100%', flex: 1, resizeMode: 'cover' }}>
        
            <View 
            style={{ 
              flex: 1, 
              alignItems: 'center', 
              justifyContent: 'center' 
              }}>
      
              <Text style={styles.bigWhite}> Photo Cache </Text>
              {/* <Image
              source={require('../../images/logo.png')}
              style={{ width: 100, height: 100 }}
              /> */}
              <Button
                title="Upload"
                onPress={() => {
                  this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Stash' })
                    ],
                  }))
                }}
                />
              
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
export { StashScreen };
