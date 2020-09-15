// this component to add onther flatlist in mainpage under first flatlist
import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import colors from '../../Assets/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class OverViewSale extends Component {
    render() {

        const image = { uri: "https://cdn.pixabay.com/photo/2017/08/02/13/10/drink-2571544_960_720.jpg" };
        return (
            <TouchableOpacity
                style={{ flex: 1, borderRadius: 20 }}
                onPress={() => {
                    this.props.navigation.navigate("Catogray")
                    // console.log("ksldklsdk")
                }}
            >
                <ImageBackground source={image} style={styles.image}

                >
                    <View style={styles.container}>

                        <Text style={styles.text} >المطاعم</Text>


                    </View>
                </ImageBackground>
            </TouchableOpacity>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    header: {
        flexDirection: 'row-reverse',
        alignItems: "center"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        flexDirection: "column",
        // width: 155,
        margin: 10,
        borderRadius: 20,
        // height: 100,
        // borderRadius: 200,
        paddingTop: 63,
        resizeMode: 'cover'
    },

    text:
    {
        color: colors.white,
        fontSize: 26,
        fontWeight: "bold"

    },
    imagerate: {
        width: 15,
        height: 15
    },
    info: {
        flex: 1
    }

})
