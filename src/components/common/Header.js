import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}
export { Header }