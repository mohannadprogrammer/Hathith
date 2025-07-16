import React, { Component } from 'react'
import { Text, View } from 'react-native'
import colors from '../../Assets/colors'
import Header from '../../Components/Header/Header'
import Task from '../../Components/Task/Task'

export default class Boot extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.light_blue }}>
                <Header name="مراسلة" />
                <Task action={() => {
                    console.log("laksd")
                    this.props.navigation.navigate("Location");
                }} />
            </View>
        )
    }
}
