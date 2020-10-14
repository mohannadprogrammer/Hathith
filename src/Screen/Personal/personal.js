import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, StyleSheet } from 'react-native'
import Header from '../../Components/Header/Header'
import colors from '../../Assets/colors'
import AsyncStorage from '@react-native-community/async-storage'

import I18n from 'react-native-i18n'
const io = I18n.currentLocale()
export default class personal extends Component {
    state = {
        user: {

        },
        order: 4
    }
    componentDidMount() {
        this.getUserData()
    }
    async getUserData() {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            console.log("sdfsdfsf" + JSON.parse(jsonValue).lastname);
            this.setState({
                user: JSON.parse(jsonValue)
            })
            return JSON.parse(jsonValue);
        } catch (e) {
            // error reading value
            console.log(e)
            return null

        }
    }
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
                        <Text style={{ color: colors.main }}>{this.state.user.firstname} </Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ color: colors.main }}>{this.state.user.lastname} </Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={{ color: colors.main }}>عدد الطلبات </Text>
                        <Text style={{ color: colors.main }}>{this.state.order} </Text>
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
