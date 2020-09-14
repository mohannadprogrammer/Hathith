import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Header from '../../Components/Header/Header'
import colors from '../../Assets/colors'

export default class Orders extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header name="التنبيهات" />
                <View style={styles.container}>
                    <View style={styles.offers}>
                        <Text style={styles.subtitle}>عروض</Text>
                    </View>
                    <View style={styles.newShops}>
                        <Text style={styles.subtitle}>متاجر جديدة</Text>

                        <FlatList />
                    </View>
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

