import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Header from '../../Components/Header/Header'
import OrderView from '../../Components/OrderView/orderView'
import colors from '../../Assets/colors'

export default class Orders extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header name="الطلبات" />
                <View style={styles.container}>
                    <FlatList
                        data={[{ tile: "alsdf" }, {}]}
                        renderItem={() => <OrderView />}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    subtitle: {
        color: colors.orange,
        fontSize: 20
    },
    // sccreen 
    offers: {
        flex: 1,
        // backgroundColor: 'red'
    },
    newShops: {
        flex: 2,
        // backgroundColor: "blue"
    }
})

