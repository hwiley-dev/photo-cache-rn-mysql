import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Card, Button, CardSection, Header } from './common'

// const { imageStyle, imageContainerStyle } = styles;
const { title, artist, thumbnail_image } = fakepost
 
class FakePost extends Component { 
    static state = { posts: "hello" }
    render(){
        return (
          <View>
    <Card>
        <CardSection>
            <View style={styles.imageContainerStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: thumbnail_image}} />
                    <Text> {title} </Text> 
                    <Text> {artist} </Text> 
            </View>
        </CardSection>
    </Card>
        </View>  
        )
    }
    }

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageStyle: {
        height: 80,
        width: 80
    },
    imageContainerStyle: {
        justiftyContent: 'center',
        alignItems: 'center',
        margin: 5
    }
}
export default FakePost
  
// <View style={{
//     flex: 2, 
//     flexDirection: 'row', 
//     padding: 10,
//     margin: 10,
//     borderRadius: 10,
//     borderColor: 'black',
//     shadowColor: 'black',
//     shadowRadius: 2,
//     borderWidth: 2}} >
//         {/* POST COMP PROPS:
//         THUMBNAIL
//         USER
//         TIMESTAMP
//          */}
//     <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>

//     {/* USER THUMBNAIL 
//         - Obtain user obj from AJAX request from db/API  endpoint (or some other server?--ie FACEBOOK) 
//         - See Gravatar
//         - Pass User thumbnail url to SOURCE attribute in Image component via JSX 
    
//     */}

//     <Image
//         style={{
//             width: 55,
//             height: 55  ,
//             resizeMode: 'contain',
//             justifyContent: 'flex-end', 
//             alignItems: 'center'
//            }}
//         source={require('./../../images/logo.png')} 
//     />


// {/* USERNAME
//     - GET username from User Post Object */}
//     <Text style={{ color: 'black', fontWeight: 'bold',
//       fontSize: 15 }}> USERNAME </Text>
//     </View>


//     {/* Comment/Message */}

//     <View style={{justifyContent: 'center', alignItems: 'center', width: '65%'}} >
//         <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}> Nostrud ea ex aute Lorem occaecat tempor officia.  
//         </Text>
//     </View>
// </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//     bigB: {
//       color: 'black',
//       fontWeight: 'bold',
//       fontSize: 30,
//     }
//   })