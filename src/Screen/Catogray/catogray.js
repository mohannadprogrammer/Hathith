import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native'
import CartHeader from '../../Components/CartHeader/cartHeader'
import Product from '../../Components/Product/product'
import colors from '../../Assets/colors'

// import Image from '../../Assets/images/store'
export default class catogray extends Component {
    render() {
        const data = [
            {
                key: "1",
                title: "كنتاكي",
                image: require("../../Assets/images/store/kfc.png")
            },
            {
                key: "2",
                title: "ماكدونال الرياض",
                image: require("../../Assets/images/store/mc.png")
            }, {
                key: "3",
                title: "البيك",
                image: require("../../Assets/images/store/beak.png")
            }

        ]
        return (
            <View style={styles.container} >
                <CartHeader name="المطاعم"></CartHeader>
                <FlatList
                    data={data}
                    numColumns={2}
                    style={{ flex: 1 }}
                    renderItem={({ item, index, separators }) => {
                        // if (item.title === "البيك") {
                        // let image = require("../../Assets/images/store/beak.png")
                        // }
                        return (
                            <View style={styles.store} key={item.key}>
                                <Image source={item.image} />
                                <Text style={{ color: colors.orange, padding: 10 }}>{item.title}</Text>
                            </View>
                        )
                    }}
                >

                </FlatList>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    store: {
        flex: 1,
        backgroundColor: "#FFF",
        margin: 5,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },


})

