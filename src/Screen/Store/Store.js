import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native'
import CartHeader from '../../Components/CartHeader/cartHeader'
import Product from '../../Components/Product/product'


export default class Store extends Component {
    state = {
        store: [],
        message: [],
    }

    compoentDidAmount() {

        getShopOfCategoryApi(id, token).then((responese) => {
            this.setState({
                isLoading: false,
                store: response.data,
                message: "sorry no data"
            })


        }).catch((erre) => {
            this.setState({
                message: "Network Erro"
            })
        })
    }

    render() {
        const store = this.state.store
        const { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
                <CartHeader name="كنتاكي" navigate={this.props.navigation}></CartHeader>
                <View style={styles.container}>
                    <View style={styles.background}>
                        <Image style={styles.image} source={require("../../Assets/images/kfc.png")} />
                    </View>
                    <View style={styles.list}>
                        {/* {data.map(() => (
                            <Product
                            // key={key}
                            // data={item}
                            />
                        ))} */}
                        {

                            this.state.isLoading ?
                                <View style={{ flex: 1, padding: 20 }}>
                                    <ActivityIndicator />
                                </View> :
                                (

                                    this.state.store.length == 0 ?
                                        <View style={{ flex: 1, padding: 20 }}>
                                            <Text style={{ color: '#000', fontWeight: 'bold' }}>{this.state.message}</Text>
                                        </View> :
                                        <View style={{
                                            // flex: 1, 

                                            height: 100,
                                            alignItems: 'center'
                                        }}>
                                            <FlatList
                                                data={this.state.store}
                                                keyExtractor={item => item.id}
                                                renderItem={({ item }) =>
                                                    <OfferView key={item.store.name}
                                                    />

                                                }
                                                renderItem={({ item }) =>
                                                    <Text style={{ color: '#000', fontWeight: 'bold' }}>{item.store.name} </Text>
                                                }
                                                numColumns={2}

                                            />
                                            return (
                                                <OverViewSale navigation={this.props.navigation} key={i} data={item} />
                                              )
                                        </View>
                                )

                        }

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

