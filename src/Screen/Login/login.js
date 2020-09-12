import React, { Component } from 'react';
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native'



function Login(props) {

    const [value, onChangeText] = React.useState('ادخل رقم الجوال');
    const { navigation } = props
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.stretch}
                    source={require('../../../assets/images/logo.jpg')}
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>تسجيل الدخول</Text>
                <TextInput
                    style={{ height: 40, width: 288, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}

                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Check')}>
                    <Text style={styles.buttonText}>تخطي</Text>
                </TouchableOpacity>

            </View>

            <Button
                onPress={() => navigation.navigate('Check')}
                title="تأكيد"
                color="#FF6347"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        backgroundColor: '#F0F8FF'
    },
    footer: {
        flex: 1,
        backgroundColor: '#F0F8FF'
    },
    stretch: {
        width: 344,
        height: 200,
        resizeMode: 'stretch',
    },
    title: {
        padding: 8,
        fontSize: 22,
        color: '#F07523'

    }


})

export default Login