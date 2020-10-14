import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../../Assets/colors'

import I18n from 'react-native-i18n'
const io = I18n.currentLocale()
export default class orderView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={require('../../Assets/images/logo.png')}
                    />
                    <Text style={styles.text}> كنتاكي </Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>اسم المندوب</Text>
                    <Text style={styles.text}>محمد على خالد الامين</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.text}>المجموع</Text>
                    <Text style={styles.text}>300 ريال</Text>
                </View>
                <TouchableOpacity
                    // onPress={() => navigation.navigate('Check')}
                    style={styles.botton}
                >

                    <Text style={{ color: "#FFFF", fontSize: 16 }}>دخول الطلب</Text>
                </TouchableOpacity>

            </View>
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
        flexDirection: io === "en-US" ? "row-reverse" : "row",
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
        color: colors.main,
    },
    info: {
        flexDirection: io === "en-US" ? "row-reverse" : "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.light_gray,
        padding: 5,
        margin: 5

    },
    botton: {
        // flex: 1,
        // width: "100%",

        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.main,
        padding: 5,
        margin: 5,
        borderRadius: 10
    },
})

