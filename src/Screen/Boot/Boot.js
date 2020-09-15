import React, { Component } from 'react'
import { Text, View } from 'react-native'
import colors from '../../Assets/colors'
import Header from '../../Components/Header/Header'

export default class Boot extends Component {
    render() {
        return (
            <View style={{}}>
                <Header name="مراسلة" />
                <Text> textInComponent </Text>
            </View>
        )
    }
}
