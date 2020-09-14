import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import colors from '../../Assets/colors'

export default class offerView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/images/logo.jpg')}
                    />
                    <Text style={styles.text}> كنتاكي </Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>خصم 10% </Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>الفراخ البوست  </Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>300 ريال </Text>
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
        padding: 10,
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
        backgroundColor: colors.orange,
        padding: 5,
        margin: 5,
        borderRadius: 10
    }
})
