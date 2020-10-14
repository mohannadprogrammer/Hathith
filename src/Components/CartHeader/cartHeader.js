import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../Assets/colors'
import Icon from '../../Assets/Icons'

import I18n from 'react-native-i18n'
const io = I18n.currentLocale()
console.log(io)
export default class cartHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigate.goBack();
                        // alert("akjsdkfkajsd")
                    }}
                >
                    {Icon.Back(colors.main)}

                </TouchableOpacity>
                <Text style={styles.headerName} >{this.props.name} </Text>

                {!this.props.noCart ?
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigate.navigate("Cart");

                            // alert("akjsdkfkajsd")
                        }}

                    >
                        {Icon.Cart(colors.main)}

                    </TouchableOpacity> : null
                }

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: io === "en-US" ? "row" : "row-reverse",
        backgroundColor: "#FFFF",
        padding: 15
    },
    headerName: {
        color: colors.main,
        fontSize: 20,
        textAlign: "center",
        // width: '100%',
        fontWeight: "bold"
    }
})
