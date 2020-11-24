import React, { Component, useState, useRef, useEffect } from 'react';
import {
    StyleSheet, ActivityIndicator, View, Text, TouchableOpacity, Image, TextInput,
    Button,

} from 'react-native'
import LoginHOC from '../../HOC/LoginHOC/LoginHoc'
import AsyncStorage from '@react-native-community/async-storage';
import { getCategoryApi, getShopOfCategoryApi } from '../../api'


class Login extends Component {

    state = {
        phone: "",
        disable: true
    };

    // async componentDidUnmount() {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('user')
    //         // console.log("sdfsdfsf" + JSON.parse(jsonValue).lastname);
    //         var { lastname, firstname, token, ...rest } = await JSON.parse(jsonValue);
    //         await console.log(token);
    //         // getCategoryApi(token).then((Response) => {
    //         //     console.log(Response);
    //         // }).catch((error) => {
    //         //     console.log(error);
    //         // });
    //     } catch (error) {

    //     }


    // }

    onPhoneChange = phone => {
        this.setState({ phone });
    };
    async sendData() {
        // console.log("slkdlf")
        // this.setState({
        //   loading: true
        // })

        await fetch("http://209.97.181.175:5000" + "/user/register",
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json'

                },

                body: JSON.stringify(this.state)
            }).then((response) => response.json()).then(async (responseJson) => {
                let { done } = responseJson;
                console.log(responseJson)
                this.props.navigation.navigate("Check", { phone: this.state.phone });

                // if (done) {
                //     // await this.saveTokenAndUserData(responseJson.userData);
                //     this.setState({
                //         loading: false
                //     })
                //     // this.props.navigation.navigate("Check", { phone: this.state.phone });
                //     this.props.navigation.dispatch(
                //         CommonActions.reset(
                //             {
                //                 index: 1,
                //                 routes: [
                //                     { name: 'Check' },

                //                 ],
                //             }
                //         )
                //     )

                // } else {

                // }

            }).catch((error) => {
                this.setState({
                    loading: false
                })
                console.log(error, ">>>>>>>>>>>>>>>>>>>")
            });

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

        const { navigation } = this.props.navigation

        return (
            <LoginHOC
                step={1}
                loaging={false}
                footer={() => (
                    <View>
                        <View style={styles.footer}>
                            <Text style={styles.title}>تسجيل الدخول</Text>
                            <View
                                style={{
                                    // width: "100%",
                                    borderColor: colors.light_gray,
                                    borderWidth: 1,

                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        padding: 15,
                                        backgroundColor: colors.light_gray
                                    }}
                                >
                                    <Text>+955</Text>
                                </View>
                                <TextInput

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
                            </View>

                            {
                                this.state.phone.length !== 9 || this.state.phone === "" ?
                                    <Text style={{ color: colors.danger, alignSelf: "center", fontSize: 12 }}>
                                        رقم الهاتف يجب ان يتكون من 9 خانات مثال
                                         {/* <Text>
                                        (+955 55 xxx xxxx)
                                            
                                         </Text> */}
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
                                    // this.props.navigation.navigate("Check", { phone: this.state.phone });
                                    this.sendData();
                                }}
                                style={[styles.botton, this.state.disable ? { backgroundColor: colors.main, opacity: 0.7 } : null]}
                                disabled={this.state.disable}

                            >

                                <Text style={{ color: "#FFFF", fontSize: 22 }}>تأكيد</Text>
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