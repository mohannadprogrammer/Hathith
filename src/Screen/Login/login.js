import React, { Component, useState, useRef, useEffect } from 'react';
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import LoginHOC from '../../HOC/LoginHOC/LoginHoc'
import Spinner from 'react-native-loading-spinner-overlay';

import BASEAXIOSURL, { setClientToken } from '../../api/axios';

const initialState = {
    phone: '',
    OTP: '1234',
    errors: {},
    isAuthorized: false,
    isLoading: false,
};

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
  // this suppose to take from login to main page if login success but i dont have main pae api mohanned
        BASEAXIOSURL.post('/user/main/', payload)
            .then(onSuccess)
            .catch(onFailure);
    }
    render() {
      
        const {isLoading} = this.state;
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
                                    placeholder="أخل رقم الجوال",
                                    

                                }}
                            // onChangeText={text => onChangeText(text)}
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
                                style={styles.botton}
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