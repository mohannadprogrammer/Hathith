import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native'

class Mainpage extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>this top page</Text>
                </View>
                <View style={{ padding: 2, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text>this top2 page</Text>
                </View>
                <Text>this top page3</Text>

            </View>

        )
    }
}
import colors from '../../Assets/colors'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFF"
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
    }



})

export default Mainpage