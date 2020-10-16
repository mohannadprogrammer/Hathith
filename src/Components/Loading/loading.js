import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import colors from '../../Assets/colors'

export default class loading extends Component {

    render() {
        if (!this.props.loading) {
            return null
        }
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#aaaaaa" animating />
                <Text> تحميل ... </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // position: "absolute",
        // flex: 0,
        height: "100%", width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        // opacity: 0.5,
    }
})
