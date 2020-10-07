import React, { Component, useState, useRef, useEffect } from 'react';
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet, ActivityIndicator, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import LoginHOC from '../../HOC/LoginHOC/LoginHoc'
import AsyncStorage from '@react-native-community/async-storage';
import CountryPicker from 'react-native-country-picker-modal';
import BASEAXIOSURL, { setClientToken } from '../../api/axios';

const initialState = {
    phone: '',
    OTP: '1234',
    errors: {},
    isAuthorized: false,
    isLoading: false,
    disable: true,
};
const MAX_LENGTH_CODE = 6;
const MAX_LENGTH_NUMBER = 10;
const countryPickerCustomStyles = {};

class Login extends Component {

    state = initialState;

    componentWillUnmount() { }

    onPhoneChange = phone => {
        this.setState({ phone });
    };

    onPressLogin() {
        const { phone } = this.state;
        const payload = { phone };
        console.log(payload);

        const onSuccess = ({ data }) => {
            // Set JSON Web Token on success
            setClientToken(data.token);
            this.setState({ isLoading: false, isAuthorized: true });
        };
        const onFailure = error => {
            console.log(error && error.response);
            this.setState({ errors: error.response.data, isLoading: false });
        };

        // Show spinner when call is made
        this.setState({ isLoading: true });

        BASEAXIOSURL.post('/user/login/', payload)
            .then(onSuccess)
            .catch(onFailure);
    }

    getNonFieldErrorMessage() {
        let message = null;
        const { errors } = this.state;
        if (errors.non_field_errors) {
            message = (
                <View style={styles.errorMessageContainerStyle}>
                    {errors.non_field_errors.map(item => (
                        <Text style={styles.errorMessageTextStyle} key={item}>
                            {item}
                        </Text>
                    ))}
                </View>
            );
        }
        return message;
    }

    getErrorMessageByField(field) {
        // Checks for error message in specified field Shows error message from backend
        let message = null;
        if (this.state.errors[field]) {
            message = (
                <View style={styles.errorMessageContainerStyle}>
                    {this.state.errors[field].map(item => (
                        <Text style={styles.errorMessageTextStyle} key={item}>
                            {item}
                        </Text>
                    ))}
                </View>
            );
        }
        return message;
    }

    render() {

        const { isLoading } = this.state;
        // const [value, onChangeText] = React.useState('ادخل رقم الجوال');
        const { navigation } = this.props


        return (
            <LoginHOC
                step={1}
                footer={() => (
                    <View>
                        <View style={styles.footer}>
                            <Text style={styles.title}>تسجيل الدخول</Text>
                            <TextInput
                                style={{
                                    width: "100%",
                                    borderColor: colors.light_gray,
                                    borderWidth: 1,


                                }}
                                value={this.state.username}
                                placeholder="أخل رقم الجوال"
                                keyboardType="numeric"
                                onChangeText={text => {
                                    this.setState({
                                        disable: false
                                    })
                                    onChangeText(text)
                                }}
                            // value={"value"}

                            />
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('Check')}>
                                <Text style={styles.title}>تخطي</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.submit} >
                            <TouchableOpacity
                                onPress={this.onPressLogin.bind(this)}
                                style={[styles.botton, this.state.disable ? { backgroundColor: colors.light_orange, opacity: 0.7 } : null]}
                                disabled={this.state.disable}

                            >

                                <Text style={{ color: "#FFFF", fontSize: 24 }}>تأكيد</Text>
                            </TouchableOpacity>
                            <View
                                style={styles.line}
                            >

                            </View>
                            <View>
                                <Text style={{ textAlign: "center", color: colors.orange, fontSize: 12 }}>استخدامك لهاذا التطبيق يعني موافقتك على سياسة و شروط الاستخدام</Text>
                            </View>
                        </View>
                    </View>

                )}

            // submit={() => (

            // )}
            >

            </LoginHOC>



        )
    }
}
import colors from '../../Assets/colors'
const styles = StyleSheet.create({

    footer: {
        padding: 20,
    },
    title: {
        paddingBottom: 16,
        paddingTop: 16,
        fontSize: 16,
        color: colors.orange

    },
    submit: {
        bottom: 0,
        width: "100%",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"

    },
    botton: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.orange,
        padding: 20,
        borderRadius: 10
    },
    line: {
        width: "80%",
        height: 3,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: colors.gray
    }


})

export default Login