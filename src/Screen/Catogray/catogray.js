import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, FlatList } from 'react-native'
import CartHeader from '../../Components/CartHeader/cartHeader'
export default class catogray extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CartHeader name="المطاعم"></CartHeader>
                <View style={styles.container}>
                    <View style={styles.background}>
                        <Image style={styles.image} source={require("../../Assets/images/kfc.png")} />
                    </View>
                    <View style={styles.list}>
                        <FlatList

                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        // flex: 1,
        position: "absolute"
    },
    list: {
        flex: 1,
        top: 150,
        // backgroundColor: "red"
    },
    image: {
        height: 200,
        width: Dimensions.get("window").width,
        resizeMode: "contain"
    }
})

