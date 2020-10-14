import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native'

class LoginHOC extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.stretch}
                        source={require('../../Assets/images/logo.png')}
                    />
                </View>
                <View style={{ padding: 2, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={styles.activePoint} ></View>
                    <View style={this.props.step === 1 ? styles.unActivePoint : styles.activePoint} ></View>
                </View>
                <View>

                    {this.props.footer()}
                    {/* {this.props.submit()} */}
                </View>

            </View>

        )
    }
}
import colors from '../../Assets/colors'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        backgroundColor: "#FFFF"
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
    },
    stretch: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        paddingBottom: 16,
        paddingTop: 16,
        fontSize: 22,
        color: colors.main

    },
    activePoint: {
        backgroundColor: colors.blue,
        width: 10,
        height: 10,
        borderRadius: 10,
        margin: 15
    },
    unActivePoint: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
        margin: 15
    }



})

export default LoginHOC