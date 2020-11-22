// this component to add onther flatlist in mainpage under first flatlist
import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import colors from '../../Assets/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class OverViewSale extends Component {
    render() {

        const image = { uri: this.props.data.image };
        return (
            <TouchableOpacity
                style={{
                    borderRadius: 10,
                    // borderWidth: /1,
                    elevation: 4,
                    margin: 10
                    // flex: 2,
                }}
                onPress={() => {
                    this.props.navigation.navigate("Catogray", { id: this.props.data.key, name: this.props.data.name })
                    // console.log("ksldklsdk")
                }}
            >
                <ImageBackground source={image} style={styles.image}

                >
                    <View style={styles.container}>

                        <Text style={styles.text} >{this.props.data.name}</Text>


                    </View>
                </ImageBackground>
            </TouchableOpacity>


        )
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        position: "absolute",
        bottom: 0,
        right: 0,
        // width: "100%",
        padding: 5,
        borderRadius: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.main,
        backgroundColor: "#ffff",
        flexDirection: "column",
    },
    header: {
        flexDirection: 'row-reverse',
        alignItems: "center"
    },
    image: {
        // flex: 1,

        resizeMode: "cover",
        justifyContent: "center",
        flexDirection: "column",
        // width: 155,
        margin: 10,
        borderRadius: 20,
        height: 150,
        // borderRadius: 200,
        paddingTop: 63,
        resizeMode: 'cover'
    },

    text:
    {

        color: colors.main,
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
