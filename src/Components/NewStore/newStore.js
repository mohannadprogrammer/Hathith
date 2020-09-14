import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../../Assets/colors'

export default class newStore extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/images/logo.jpg')}
                    />
                    <View style={styles.info}>
                        <Text style={styles.text}> كنتاكي </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFF",
        padding: 20,
        margin: 5,
        borderRadius: 16,
    },
    header: {
        flexDirection: 'row-reverse',
        alignItems: "center"
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        borderRadius: 400,
        alignSelf: 'flex-end'

    },
    text:
    {
        color: colors.orange,
    },
    info: {
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        borderWidth: 1,
        flex: 1,
        borderRadius: 5,
        borderColor: colors.light_gray,
        padding: 5,
        margin: 5

    },
})

