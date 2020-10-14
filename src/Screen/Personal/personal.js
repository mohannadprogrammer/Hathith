import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, StyleSheet } from 'react-native'
import Header from '../../Components/Header/Header'
import colors from '../../Assets/colors'

import I18n from 'react-native-i18n'
const io = I18n.currentLocale()
export default class personal extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header name="صفحتي"></Header>
                <View style={styles.container}>
                    <View>
                        <Image
                            style={styles.image}
                            source={require('../../Assets/images/logo.png')}
                        />
                        <View style={{ height: 40, width: 40, borderRadius: 40, backgroundColor: colors.gray, position: 'absolute', right: 20, bottom: 0 }}>

                        </View>

                    </View>

                    <View style={styles.info}>
                        <Text style={{ color: colors.main }}>محمد </Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ color: colors.main }}>محمد </Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={{ color: colors.main }}>عدد الطلبات </Text>
                        <Text style={{ color: colors.main }}>5 </Text>
                    </View>
                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        backgroundColor: "#FFF",
        flex: 1,
    },
    image: {
        resizeMode: "cover",
        width: 200,
        height: 200,
        borderRadius: 600,
        borderWidth: 2,
        borderColor: colors.light_gray
    },
    info: {
        flexDirection: io === "en-US" ? "row-reverse" : "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 5,
        width: "100%",
        borderColor: colors.light_gray,
        padding: 5,
        margin: 15

    }
})
