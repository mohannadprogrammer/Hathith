import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import colors from '../../Assets/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class offerstoreView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/images/king.png')}
                    />
                    <Text style={styles.text}> كنج بيرقر </Text>
                </View>
                <View style={styles.info}>




                    <Text style={styles.text}>

                        <FontAwesome name="star" size={13} color="#FF8C00" style={{ marginHorizontal: 6 }} />
                        <FontAwesome name="star" size={13} color="#FF8C00" style={{ marginHorizontal: 6 }} />
                        <FontAwesome name="star" size={13} color="#FF8C00" style={{ marginHorizontal: 6 }} />
                        <FontAwesome5 name="star-half-alt" size={13} color="#FF8C00" style={{ marginHorizontal: 6 }} />

                     4.5</Text>
                </View>




            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // flex:1,
        backgroundColor: "#FFFF",
        padding: 12,
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
        paddingLeft: 22,
        color: colors.main,

    },
    imagerate: {
        width: 15,
        height: 15
    },
    info: {
        flex: 1
    }

})
