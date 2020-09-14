import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../Assets/colors'
import Icon from '../../Assets/Icons'
export default class cartHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { alert("akjsdkfkajsd") }}
                >
                    {Icon.Back(colors.orange)}

                </TouchableOpacity>
                <Text style={styles.headerName}>{this.props.name} </Text>
                <TouchableOpacity
                    onPress={() => { alert("akjsdkfkajsd") }}
                >
                    {Icon.Cart(colors.orange)}

                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#FFFF",
        padding: 15
    },
    headerName: {
        color: colors.orange,
        fontSize: 20,
        fontWeight: "bold"
    }
})
