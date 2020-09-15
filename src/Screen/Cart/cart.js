import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import CartHeader from '../../Components/CartHeader/cartHeader'
import Product from '../../Components/Product/CartProduct'
import colors from '../../Assets/colors'


export default class Store extends Component {
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

        ]
        return (
            <View style={{ flex: 1 }}>
                <CartHeader name="كنتاكي" navigate={this.props.navigation}></CartHeader>
                <View style={styles.container}>
                    <View style={styles.list}>
                        {/* {data.map(() => (
                            <Product
                            // key={key}
                            // data={item}
                            />
                        ))} */}
                        <FlatList
                            data={data}
                            // numColumns={1}
                            renderItem={({ item, index, separator }) => (
                                // <Text>sldf;lsd</Text>
                                <Product
                                    key={index}
                                    data={item}
                                />
                            )}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Location')}
                        style={styles.botton}
                    >

                        <Text style={{ color: "#FFFF", fontSize: 16 }}>طلب</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        // top: 150,
        // backgroundColor: "red"
    },
    image: {
        height: 200,
        width: Dimensions.get("window").width,
        resizeMode: "contain"
    },
    botton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.orange,
        padding: 5,
        margin: 5,
        borderRadius: 10

    }
})

