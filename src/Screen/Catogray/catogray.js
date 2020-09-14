import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, FlatList } from 'react-native'
import CartHeader from '../../Components/CartHeader/cartHeader'
import Product from '../../Components/Product/product'


export default class catogray extends Component {
    render() {
        const data = [
            {
                key: "1",
                title: "nihs",
                image: "../../../image/footer.png"
            },
            {
                key: "2",
                title: "nihs",
                image: "../image/footer.png"
            }, {
                key: "3",
                title: "nihs",
                image: "../image/footer.png"
            }
            , {
                key: "4",
                title: "nihs",
                image: "../image/footer.png"
            }, {
                key: "5",
                title: "nihs",
                image: "../image/footer.png"
            }, {
                key: "6",
                title: "nihs",
                image: "../image/footer.png"
            },

        ]
        return (
            <View style={{ flex: 1 }}>
                <CartHeader name="المطاعم"></CartHeader>
                <View style={styles.container}>
                    <View style={styles.background}>
                        <Image style={styles.image} source={require("../../Assets/images/kfc.png")} />
                    </View>
                    <View style={styles.list}>
                        <FlatList
                            data={data}
                            numColumns={2}

                            renderItem={({ item, index, separator }) => (
                                // <Text>sldf;lsd</Text>
                                <Product

                                    data={item}
                                />
                            )}
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
        flex: 1,
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

