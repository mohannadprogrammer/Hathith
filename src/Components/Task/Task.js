import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../Assets/colors'
export default class Task extends Component {
    render() {
        return (
            <ImageBackground source={require("../../Assets/images/Task.png")} resizeMode="stretch" style={styles.container}>
                {/* <Text style={styles.time}>8:00 PM</Text> */}
                <Text style={styles.service}>  مرحبا بكم مه حثيث سعيدين بخدمتكم , اختار نوع الخدم </Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colors.light_blue }]}
                        onPress={this.props.action}
                    >
                        {/* <Icon name="location-pin" type="Entypo" style={styles.locationIcon} /> */}
                        <Text style={{ color: colors.main, fontSize: 15, fontWeight: "bold" }}>طلب توصيل</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colors.light_danger }]}
                        onPress={this.props.action}
                    >
                        {/* <Icon name="location-pin" type="Entypo" style={styles.locationIcon} /> */}
                        <Text style={{ color: colors.main, fontSize: 15, fontWeight: "bold" }}>طلب من محل</Text>

                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        left: -5,
        paddingLeft: 50,
    },
    time: {
        fontWeight: "bold",
        color: colors.main
    },
    service: { fontSize: 16, color: colors.main },
    button: {
        width: 120,
        color: colors.main,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        padding: 10,
        margin: 10,
        borderRadius: 8


    },
    locationIcon: {
        color: colors.main,
        // marginRight: 10,
    }

})

