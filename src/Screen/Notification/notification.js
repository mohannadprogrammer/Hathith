import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native'
import Header from '../../Components/Header/Header'
import colors from '../../Assets/colors'
import OfferView from '../../Components/OfferView/offerView'
import NewStore from '../../Components/NewStore/newStore'

export default class Orders extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header name="التنبيهات" />
                <View style={styles.container}>
                    <View style={styles.offers}>
                        <Text style={styles.subtitle}>عروض</Text>
                        <FlatList

                            data={[{ tile: "alsdf", key: "3 " }, { key: "1" }, { key: "2" }]}
                            horizontal
                            renderItem={({ item, ...rest }) => <OfferView key={item.key} />}
                        />
                    </View>
                    <View style={styles.newShops}>
                        <Text style={styles.subtitle}>متاجر جديدة</Text>

                        <FlatList
                            data={[{ tile: "alsdf", key: "1" }, { key: "2" }, { key: "3" }]}
                            renderItem={({ item, ...rest }) => <NewStore key={item.key} />}
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
        padding: 10,
    },
    subtitle: {
        color: colors.main,
        fontSize: 20
    },
    // sccreen 
    offers: {
        flex: 2,
        // backgroundColor: 'red'
    },
    newShops: {
        flex: 2,
        // backgroundColor: "blue"
    }
})

