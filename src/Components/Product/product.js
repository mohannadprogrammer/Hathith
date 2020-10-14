import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import colors from '../../Assets/colors'
export default product = props => {
    increaseCount = (e) => {
        // props.increase();
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={require("../../Assets/images/logo.png")} style={{ width: 50, height: 50, resizeMode: "contain" }} />
                <Text style={{ color: colors.main, padding: 3 }}>وجبه كنتاكي صغيرة</Text>
                <Text style={{ color: colors.main, padding: 3 }}>30 ر.س</Text>
                <View style={styles.quntatyView}>
                    <TouchableOpacity style={styles.operation}
                        onPress={() => { props.decrease() }}
                    >
                        <Text style={{ color: colors.main, top: -2, fontSize: 30 }}>-</Text>
                    </TouchableOpacity>
                    <View style={styles.countView}>
                        <Text>0</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.operation}
                    // onPress={increaseCount.bind(this)}
                    >
                        <Text style={{ color: colors.main, top: -1, fontSize: 20 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 500,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    card: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.main,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#FFF",
        padding: 20,
    },

    quntatyView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.green_color2,
        width: 90,
        height: 35,
        borderRadius: 10,
        padding: 3,
    },
    countView: {
        alignItems: 'center',
        borderColor: colors.main,
        borderWidth: 1,
        color: 'black',
        width: 30,
        margin: 20,
        fontSize: 20,
        // borderRadius: 5,
    },
    operation: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.main,
        width: 20,
        height: 20,
    },
});
