import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import colors from '../../Assets/colors'

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
               
                    <Text style={styles.text}> 4.5</Text>
                </View>

                
               

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
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
        paddingLeft:22,
        color: colors.orange,
        
    }

})
