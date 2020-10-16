import React, { Component, useState, useRef, useEffect } from 'react';
import {
    StyleSheet, ActivityIndicator, View, Text, TouchableOpacity, Image, TextInput,
    Button,

} from 'react-native'
import LoginHOC from '../../HOC/LoginHOC/LoginHoc'
import AsyncStorage from '@react-native-community/async-storage';
import BASEAXIOSURL, { setClientToken } from '../../api/axios';


class Login extends Component {

    state = {
        phone: "",
        disable: true
    };

    componentWillUnmount() { }

    onPhoneChange = phone => {
        this.setState({ phone });
    };

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

        const { navigation } = this.props.navigation

        return (
            <LoginHOC
                step={1}
                loaging={false}
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
                                        phone: text,
                                        disable: false
                                    })

                                }}
                            />
                            {
                                this.state.phone.length !== 10 || this.state.phone === "" ?
                                    <Text style={{ color: colors.danger, alignSelf: "center", fontSize: 12 }}>
                                        رقم الهاتف يجب ان يتكون من 10 خانات
                                    </Text> : null
                            }
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.props.navigation.navigate("main")}>
                                <Text style={styles.title}>تخطي</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.submit} >
                            <TouchableOpacity
                                onPress={() => {
                                    // alert(this.state.ph);
                                    this.props.navigation.navigate("Check", { phone: this.state.phone });
                                }}
                                style={[styles.botton, this.state.disable ? { backgroundColor: colors.main, opacity: 0.7 } : null]}
                                disabled={this.state.disable}

                            >

                                <Text style={{ color: "#FFFF", fontSize: 24 }}>تأكيد</Text>
                            </TouchableOpacity>
                            <View
                                style={styles.line}
                            >

                            </View>
                            <View>
                                <Text style={{ textAlign: "center", color: colors.main, fontSize: 12 }}>استخدامك لهاذا التطبيق يعني موافقتك على سياسة و شروط الاستخدام</Text>
                            </View>
                        </View>
                    </ View>

                )}
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
        color: colors.main

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
        backgroundColor: colors.main,
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