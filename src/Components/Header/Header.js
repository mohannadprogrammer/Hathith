import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../Assets/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerName}>{this.props.name} </Text>
                <View style={{paddingLeft:200}}>
                    <TouchableOpacity>
                    <FontAwesome5 name="search" size={13} color="#0000FF" style={{marginHorizontal: 6}} /> 

                    </TouchableOpacity>
               
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#FFFF"
    },
    headerName: {
        color: colors.orange,
        fontSize: 20,
        fontWeight: "bold"
    }
})
